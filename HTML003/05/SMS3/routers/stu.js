const express = require("express");
const { getAll, writeData } = require("../mymodules/data");
const df = require("../mymodules/dataFormat");

const route = express.Router();

route.get("/list", (req, res) => {
	getAll((result) => {
		res.render("stu/list.art", { stus: result });
	});
});

route.get("/add", (req, res) => {
	res.render("stu/add.art", {});
});

route.post("/add", (req, res) => {
	writeData(df.format(req.body), () => {
		res.redirect("/stu/list");
	});
});

module.exports = route;
