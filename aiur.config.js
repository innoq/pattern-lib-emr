"use strict";

exports.title = "Touch Input Devices";
exports.language = "en";

exports.sass = [{
  source: "./index.scss"
}];

exports.js = [{
  source: "./index.js"
}];

exports.pages = {
	"": "./components/welcome.md",
	components: {
		file: "./components/components.md",
		children: {
			keyboardkey: "./components/keyboard-key/doc.md"
		}
	}
};
