import { createElement } from "complate-stream";

export function IconElement({ icon, label }) {
	return <span class={`emr-icon fa fa-${icon}`}>{label}</span>;
}
