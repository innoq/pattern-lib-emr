import { Keyboard } from '../keyboard'

class NumericKeyboard extends Keyboard {
  onKeyStrike (target, key) {
    // TODO: localization?
    if (key === ".") {
      target.outerHTML = '<div></div>'
    }
  }
}

customElements.define('emr-numeric-keyboard', NumericKeyboard)