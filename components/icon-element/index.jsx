import { createElement } from "complate-stream";

export function IconElement({ icon, label }) {
	return <span class="emr-icon">
			<i class={`fa fa-${icon}`}></i>
			{label}
		</span>;
}

export function IconAfter({ icon, label }) {
	return <span class="emr-icon-after">
		{label}
		<i class={`fa fa-${icon}`}></i>
	</span>;
}
