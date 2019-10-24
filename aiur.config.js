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
		integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
		href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	}],
	scripts: []
};

exports.pages = {
	"": "./components/welcome.md",
	components: {
		file: "./components/components.md",
		children: {
			keyboardkey: "./components/keyboard-key/doc.md"
		}
	}
};
