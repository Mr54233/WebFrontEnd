const express = require("express");
const session = require("express-session");
const app = express();
const port = 3000;

app.use(require("cors")());
app.use(
	session({
		secret: "keyboard cat",
		resave: false,
		saveUninitialized: true,
	})
);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/category", require("./routers/categories"));

app.listen(port, () => console.log(`http://127.0.0.1:${port}!`));
