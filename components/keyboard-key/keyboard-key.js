class KeyboardKey extends HTMLButtonElement {
  constructor() {
    super();
  }
  connectedCallback () {
    console.log("I'm a key that should be pressed");
  }
}

customElements.define('emr-key', KeyboardKey, { extends: 'p' })