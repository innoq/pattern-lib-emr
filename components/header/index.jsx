import { createElement } from "complate-stream";

export function Header({ firstname, lastname, sex, birthday, age, birthplace, address}) {
	return <header is="emr-header" class="emr-header">
		<div class="emr-header-element emr-header-element__name">{firstname} {lastname}</div>
		<div class="emr-header-element">{sex}</div>
		<div class="emr-header-element">
			<div>{birthday}</div><div>{age &&  `${age} yrs`}</div>
		</div>
		<div class="emr-header-element emr-header-element__address">
			{birthplace && [<span class="fas fa-star-of-life emr-header-element__address__icon"></span>, birthplace]}
		</div>
		<div class="emr-header-element emr-header-element__address">
			{address && [<span class="fas fa-home emr-header-element__address__icon"></span>, address]}
		</div>
	</header>;
}