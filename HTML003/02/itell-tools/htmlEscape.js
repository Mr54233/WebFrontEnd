function htmlEscape(htmlStr) {
	return htmlStr
		.replace("<", "&lt;")
		.replace(">", "&gt;")
		.replace(" ", "&nbsp;");
}

module.exports.htmlEscape = htmlEscape;
