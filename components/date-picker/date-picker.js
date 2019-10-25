class DatePicker extends HTMLInputElement {
  connectedCallback () {
    // $(this).pickadate()
    console.log(jQuery)
  }
}

customElements.define('emr-date-picker', DatePicker, { extends: 'input' })