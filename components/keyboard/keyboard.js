import { KEY_STRIKE_EVENT, BACKSPACE_STRIKE_EVENT } from '../keyboard-key/keyboard-key'

function capitalizeIfNecessary (currentValue, key) {
  if (currentValue === "" || currentValue.endsWith(" ")) {
    return key.toUpperCase()
  }
  return key.toLowerCase()
}

export class Keyboard extends HTMLElement {
  connectedCallback () {
    if (!this.inputId || !document.getElementById(this.inputId)) {
      console.error("Could not find corresponding input field for keyboard")
      return
    }

    this.input = document.getElementById(this.inputId)
    this.addEventListener(KEY_STRIKE_EVENT, (event) => {
      event.stopPropagation()

      let { detail } = event
      let key = this.capitalize
        ? capitalizeIfNecessary(this.input.value, detail.key)
        : detail.key

      // Perform the keystrike that has been specified
      this.input.value = this.input.value + key
      this.onKeyStrike(event.target, key)
    })
    this.addEventListener(BACKSPACE_STRIKE_EVENT, (event) => {
      let value = this.input.value
      this.input.value = value.slice(0, value.length - 1)
      this.onBackspace(event.target, this.input.value)
    })
  }

  onKeyStrike (target, key) {}

  onBackspace (target, newValue) {}

  get inputId () {
    return this.getAttribute('data-input-id')
  }

  get capitalize () {
    return this.getAttribute('data-transform') === 'capitalize'
  }
}

customElements.define('emr-keyboard', Keyboard)