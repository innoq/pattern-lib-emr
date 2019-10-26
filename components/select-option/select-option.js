export class SelectOption extends HTMLOptionElement {

  constructor(){
    super();
    this.selected = false;
  }

  static get observedAttributes() {
    return ['selected'];
  }

  attributeChangedCallback(attrName, oldVal, newVal){
    if(name == 'selected' && oldVal != newVal){
      this.selected = newVal;
    }
  }

  connectedCallback () {
    this.addEventListener("mouseup", this.toggleSelected);
    this.addEventListener("mousedown", e => e.preventDefault());
  }

  disconnectedCallback () {
    this.removeEventListener("mouseup");
    this.removeEventListener("mousedown");
  }

  toggleSelected(e) {
    e.preventDefault();
    this.selected = !this.selected;
    this.parentElement.focus();
  }

  get selected() {
    return this.hasAttribute('selected')
  }

  set selected(isSelected) {
    if (isSelected){
      this.setAttribute('selected', '');
    } else {
      this.removeAttribute('selected');
    }
  }

}

customElements.define('emr-select-option', SelectOption, { extends: 'option'});