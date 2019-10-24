class Input extends HTMLInputElement {
  constructor() {
    super();
  }
  connectedCallback () {
    console.log("I'm an input field");
  }
}

customElements.define('emr-input', Input, { extends: '_input.scss' })