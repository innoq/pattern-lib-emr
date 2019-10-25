"use strict";

exports.title = "Touch Input Devices";
exports.language = "en";

exports.sass = [{
  source: "./index.scss"
}];

exports.js = [{
  source: "./index.js"
}];

exports.vendor = {
	styles: [{
		crossorigin: "anonymous",
		integrity: "sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU",
		href: "https://use.fontawesome.com/releases/v5.5.0/css/all.css"
	}],
	scripts: []
};

exports.pages = {
	"": "./components/welcome.md",
	view: "./components/view.md",
	components: {
		file: "./components/components.md",
		children: {
			iconelement: "./components/icon-element/doc.md",
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
