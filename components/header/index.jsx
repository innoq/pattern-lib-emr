import { createElement } from "complate-stream";

export function Header({ name, sex, birthday, age, birthplace, address}) {
	return <header is="emr-header" class="emr-header">
		<div class="emr-header-element emr-header-element__name">{name}</div>
		<div class="emr-header-element">{sex}</div>
		<div class="emr-header-element">
			<div class="">{birthday}</div><div>{age}&nbsp;yrs</div>
		</div>
		<div class="emr-header-element emr-header-element__address"><span class="fas fa-star-of-life emr-header-element__address__icon"></span>{birthplace}</div>
		<div class="emr-header-element emr-header-element__address"><span class="fas fa-home emr-header-element__address__icon"></span>{address}</div>
	</header>;
}