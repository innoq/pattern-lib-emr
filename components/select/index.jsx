import { createElement } from "complate-stream";

export function Select({label, id, multiple}, ...children) {
	return <div>
			<label for={id}>{label}</label>
			<select class="emr-select" id={id} size={children.length} multiple={multiple}>
				{children}
			</select>
		</div>;
}
