import { createElement } from "complate-stream";

export function Select({label, name, classname, multiple, ...chlidren }) {
	return <label class={classname}> {label}
		<select name={name} size={chlidren.length} multiple={multiple}>
		</select>
	</label>;
}
