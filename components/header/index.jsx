import { createElement } from "complate-stream";

export function Header({ name, sex, birthday, age, birthplace, address}) {
	return <header is="emr-header" class="emr-header">
		<div class="emr-header-element emr-header-element__name">{name}</div>
		<div class="emr-header-element">{sex}</div>
		<div class="emr-header-element">
			<span class="">{birthday}</span>/<span>{age}&nbsp;yrs</span>
		</div>
		<div class="emr-header-element emr-header-element-address"><span class="fas fa-star-of-life emr-header-element-address__icon"></span>{birthplace}</div>
		<div class="emr-header-element emr-header-element-address"><span class="fas fa-home emr-header-element-address__icon"></span>{address}</div>
	</header>;
}