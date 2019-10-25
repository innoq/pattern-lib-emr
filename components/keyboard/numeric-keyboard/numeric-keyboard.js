import { Keyboard } from '../keyboard'

class NumericKeyboard extends Keyboard {
  onKeyStrike (target, key) {
    // TODO: localization?
    if (key === ".") {
      target.classList.add("hidden")
    }
  }
  onBackspace (target, newValue) {
    if (!newValue.includes(".")) {
      this.querySelectorAll(".emr-key")
        .forEach(key => key.classList.remove("hidden"))
    }
  }
}

customElements.define('emr-numeric-keyboard', NumericKeyboard)