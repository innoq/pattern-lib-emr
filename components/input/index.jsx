import { createElement } from "complate-stream";

export function Input({ value }) {
	return <input is="emr-input" class="input emr-input" value={value}/>;
}
