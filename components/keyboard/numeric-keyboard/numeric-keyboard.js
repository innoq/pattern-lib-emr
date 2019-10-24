import { Keyboard } from '../keyboard'

class NumericKeyboard extends Keyboard {
  onKeyStrike (target, key) {
    // TODO: localization?
    if (key === ".") {
      target.disabled = true
    }
  }
}

customElements.define('emr-numeric-keyboard', NumericKeyboard)