const fs = require("fs");
fs.readFile("../files/成绩.txt", "utf-8", (err, result) => {
	if (err) {
		console.log(err.message);
	} else {
		const arrOld = result.split(", ");

		const arrNew = [];
		arrOld.forEach((item) => {
			arrNew.push(item.replace("=", ":"));
		});

		const newStr = arrNew.join("\r\n");
		console.log(newStr);

		fs.writeFile("../files/成绩-ok.txt", newStr, "utf-8", (err) => {
			if (err) {
				console.log("err.message", err.message);
			} else {
				console.log("写入成功");
			}
		});
	}
});
