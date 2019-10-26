import { createElement } from "complate-stream";

export function SelectOption({text, wert, multiple }) {
	return multiple ?
			<option is="emr-select-option" class="emr-select-option" value={wert}>{text}</option> :
			<option class="emr-select-option" value={wert}>{text}</option>;
}
