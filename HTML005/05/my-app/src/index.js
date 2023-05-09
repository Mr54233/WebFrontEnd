import React from "react";
import ReactDOM from "react-dom";

//
// 嵌入js表达式
//
const name = "Tom";
const age = 19;
const dv = (
	<div>
		<h1>
			你好我叫：{name},年龄：{age}
		</h1>
	</div>
);

ReactDOM.render(dv, document.getElementById("root"));
