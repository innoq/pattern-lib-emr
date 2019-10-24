import { createElement } from "complate-stream";

export function KeyboardKey({ key }) {
	return <button is="emr-key" class="btn btn-outline-primary emr-key blabla">{key}</button>;
}
