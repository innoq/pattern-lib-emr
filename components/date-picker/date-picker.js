class DatePicker extends HTMLInputElement {
  connectedCallback () {
    let $input = $(this).pickadate({
      closeOnClear: false,
      closeOnSelect: false
    })
    let picker = $input.pickadate('picker')
    picker.close = (focus) => {
      // Override Close behavior so datepicker stays open
    }

    picker.open()
  }
}

customElements.define('emr-date-picker', DatePicker, { extends: 'input' })