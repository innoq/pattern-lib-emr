import { KEY_STRIKE_EVENT, BACKSPACE_STRIKE_EVENT } from '../keyboard-key/keyboard-key'

class SelectingKeyboard extends HTMLElement {
  connectedCallback () {
    if (!this.inputId || !document.getElementById(this.inputId)) {
      console.error("Could not find corresponding input field for keyboard")
      return
    }

    this.input = document.getElementById(this.inputId)
    this.addEventListener(KEY_STRIKE_EVENT, ({ detail }) => {
      event.stopPropagation()

      // Perform the keystrike that has been specified
      this.input.value = detail.key
    })
    this.addEventListener(BACKSPACE_STRIKE_EVENT, () => {
      this.input.value = ""
    })
  }

  get inputId () {
    return this.getAttribute('data-input-id')
  }
}

customElements.define('emr-selecting-keyboard', SelectingKeyboard)