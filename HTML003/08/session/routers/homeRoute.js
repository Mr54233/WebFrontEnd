const express = require("express");

const route = express.Router();

route.get("/", (req, res) => {
	if (req.session.islogin) {
		res.render("index.art", { user: req.session.user });
	} else {
		res.render("index.art", null);
	}
});

module.exports = route;
