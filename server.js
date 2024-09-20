import { createServer } from "node:http";
import { render } from "@lit-labs/ssr";
import { html } from "lit";
import { createReadStream } from "node:fs";
import { pipeline } from "node:stream";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { collectResult } from "@lit-labs/ssr/lib/render-result.js";

createServer(async (req, res) => {
  try {
    const fileUrl = getFileUrl(req);
    const contentType = getContentType(fileUrl);
    const fileStream = createReadStream(fileUrl);

    res.writeHead(200, {
      "content-type": contentType,
    });

    if (isIndexHtml(fileUrl)) {
      await handleIndexHtml(fileStream, res);
    } else {
      handleOtherFiles(fileStream, res);
    }
  } catch (err) {
    console.error(err);
    res.end("error: ", err);
  }
}).listen(8000, () => console.log("server running http://localhost:8000"));

function getFileUrl(req) {
  return `.${req.url === "/" ? "/index.html" : req.url}`;
}

function getContentType(filePath) {
  const extension = getExtension(filePath);
  switch (extension) {
    case "js":
      return "application/javascript";
    case "html":
      return "text/html";
    default:
      return "text/plain";
  }
}

function getExtension(filePath) {
  if (filePath.includes(".")) {
    const [, , extension] = filePath.split(".");
    return extension;
  }
}

function isIndexHtml(fileUrl) {
  return fileUrl.includes("index.html");
}

async function handleIndexHtml(fileStream, res) {
  await loadComponents();

  pipeline(
    fileStream,
    async function* (source) {
      source.setEncoding("utf8");

      for await (const chunk of source) {
        const litTmpl = html`${unsafeHTML(chunk)}`;
        const renderRes = render(litTmpl);
        yield await collectResult(renderRes);
      }
    },
    res,
    handlePiplineError(res)
  );
}

function handleOtherFiles(fileSource, res) {
  pipeline(fileSource, res, handlePiplineError(res));
}

function handlePiplineError(res) {
  return function (err) {
    if (err) {
      res.end("error");
      console.log("pipeline failed, error: ");
      console.error(err);
    } else {
      console.log("pipline successed");
    }
  };
}

async function loadComponents() {
  await import("./custom-element.js");
}
