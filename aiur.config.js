"use strict";

exports.title = "Touch Input Devices";
exports.language = "en";

exports.vendor = {
	styles: [{
		crossorigin: "anonymous",
		integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
		href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css"
	}],
	scripts: [{
		src: "https://code.jquery.com/jquery-3.4.1.min.js",
		crossorigin: "anonymous",
		integrity: "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	},{
		src: "https://cdn.jsdelivr.net/npm/pickadate@5.0.0-alpha.3/builds/index.min.js"
	}]
};

exports.sass = [{
  source: "./index.scss"
}];

exports.js = [{
	source: "./index.js",
	target: "./bundle.js"
}];

exports.pages = {
	"": "./components/welcome.md",
	view: "./components/view.md",
	components: {
		file: "./components/components.md",
		children: {
			header: "./components/header/doc.md",
			iconelement: "./components/icon-element/doc.md",
			datepicker: "./components/date-picker/doc.md",
			keyboardkey: "./components/keyboard-key/doc.md",
			keyboardrow: "./components/keyboard-row/doc.md",
			keyboard: {
				file: "./components/keyboard/doc.md",
				children: {
					selectingkeyboard: "./components/keyboard/selecting-keyboard/doc.md",
					numerickeyboard: "./components/keyboard/numeric-keyboard/doc.md"
				}
			},
			footer: "./components/footer/doc.md"
		}
	}
};
