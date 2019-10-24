export const KEY_STRIKE_EVENT = 'KeyStruck'
export const BACKSPACE_STRIKE_EVENT = 'BackspaceStruck'

class KeyboardKey extends HTMLButtonElement {
  connectedCallback () {
    this.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent(KEY_STRIKE_EVENT, { bubbles: true, detail: { key: this.value }}))
    })
  }

  get value () {
    return this.getAttribute('data-value') || this.textContent.trim()
  }
}

customElements.define('emr-key', KeyboardKey, { extends: 'button' })


class BackspaceKey extends HTMLButtonElement {
  connectedCallback () {
    this.addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent(BACKSPACE_STRIKE_EVENT, { bubbles: true }))
    })
  }
}

customElements.define('emr-backspace', BackspaceKey, { extends: 'button' })