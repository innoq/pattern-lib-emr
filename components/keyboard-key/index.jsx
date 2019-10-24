import { createElement } from "complate-stream";

export function KeyboardKey({ key, value }) {
	return <button is="emr-key" class="btn btn-outline-primary emr-key" data-value={value}>
		{key}
	</button>;
}

export function BackspaceKey({ key }) {
	return <button is="emr-backspace" class="btn btn-outline-primary emr-key">
		{key}
	</button>
}