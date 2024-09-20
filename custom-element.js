import "@lit-labs/ssr-client/lit-element-hydrate-support.js";

import { LitElement, html, css } from "lit";

const customElementTmpl = ({
  hideGreeting,
  customText,
  onInput,
  inputValue,
  onThemeChange,
  onGreetingChange,
  setInputToDefault,
}) => html`
  <p ?hidden="${hideGreeting}">hello from my custom element!</p>
  <p>${customText}</p>
  <input @input=${onInput} .value=${inputValue} />
  <div>
    <label>
      dark theme:
      <input type="checkbox" @change=${onThemeChange} />
    </label>
  </div>
  <div>
    <label>
      hide greeting:
      <input type="checkbox" @change=${onGreetingChange} />
    </label>
  </div>
  <div>
    <button @click=${setInputToDefault}>set input to default</button>
  </div>
`;

class CustomElement extends LitElement {
  static properties = {
    customText: {},
    theme: {},
    hideGreeting: {},
    inputValue: {},
  };

  static styles = css`
    p {
      margin: 30px;
    }
  `;

  constructor() {
    super();
    this.customText = "";
    this.theme = "light";
    this.hideGreeting = false;
    this.inputValue = "";
  }

  #onInput(event) {
    const input = event.target;
    this.customText = input.value;
    this.inputValue = input.value;
  }

  #onThemeChange(event) {
    const input = event.target;
    this.theme = input.checked ? "dark" : "light";
    this.#updateTheme();
  }

  #updateTheme() {
    document.documentElement.style.colorScheme = this.theme;
  }

  #onGreetingChange(event) {
    const input = event.target;
    this.hideGreeting = input.checked ? true : false;
  }

  #setInputToDefault() {
    this.customText = "default input value";
    this.inputValue = "default input value";
  }

  render() {
    return customElementTmpl({
      customText: this.customText,
      hideGreeting: this.hideGreeting,
      inputValue: this.inputValue,
      setInputToDefault: this.#setInputToDefault,
      onGreetingChange: this.#onGreetingChange,
      onInput: this.#onInput,
      onThemeChange: this.#onThemeChange,
    });
  }
}
customElements.define("custom-element", CustomElement);
