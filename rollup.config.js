import { nodeResolve } from "@rollup/plugin-node-resolve";

export default {
  input: "custom-element.js",
  output: {
    file: "build-cmp/custom-element.js",
  },
  plugins: [nodeResolve()],
};
