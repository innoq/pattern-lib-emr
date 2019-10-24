import { KEY_STRIKE_EVENT, BACKSPACE_STRIKE_EVENT } from '../keyboard-key/keyboard-key'

function getInputField(id) {
  return document.querySelector(`#${id}`)
}

function capitalizeIfNecessary (currentValue, key) {
  if (currentValue === "") {
    return key.toUpperCase()
  }
  return key.toLowerCase()
}

class Keyboard extends HTMLElement {
  connectedCallback () {
    if (!this.inputId || !getInputField(this.inputId)) {
      return
    }

    this.input = getInputField(this.inputId)
    this.addEventListener(KEY_STRIKE_EVENT, ({ detail }) => {
      event.stopPropagation()

      let key = this.capitalize
        ? capitalizeIfNecessary(this.input.value, detail.key)
        : detail.key

      // Perform the keystrike that has been specified
      this.input.value = this.input.value + key
    })
    this.addEventListener(BACKSPACE_STRIKE_EVENT, () => {
      let value = this.input.value
      this.input.value = value.slice(0, value.length - 1)
    })
  }

  get inputId () {
    return this.getAttribute('data-input-id')
  }

  get capitalize () {
    return this.getAttribute('data-transform') === 'capitalize'
  }
}

customElements.define('emr-keyboard', Keyboard)