import React from "react";
import ReactDOM from "react-dom";

//
// 嵌入js表达式
//
const name = "Tom";
const age = 19;
const sayhi = () => 'hi';

const h1 = <h1>我是jsx</h1>;
const dv = (
	<div>
		<h1>
			你好我叫：{name},年龄：{age}
			<h1>{1}</h1>
			<h1>{"a"}</h1>
			<h1>{1+1}</h1>
			<h1>{sayhi()}</h1>
		</h1>
		嵌入jsx：{h1}
	</div>
);

ReactDOM.render(dv, document.getElementById("root"));
