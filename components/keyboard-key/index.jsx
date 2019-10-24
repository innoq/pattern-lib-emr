import { createElement } from "complate-stream";

export function KeyboardKey({ label }) {
	return <button is="emr-key" class="btn btn-outline-primary emr-key">{label}</button>;
}
