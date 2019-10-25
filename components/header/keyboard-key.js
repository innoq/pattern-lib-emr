class Header extends HTMLElement {
  connectedCallback () {
  }
}

customElements.define('emr-header', Header, { extends: 'header' });