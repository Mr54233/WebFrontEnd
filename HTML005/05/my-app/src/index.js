import React from 'react';
import ReactDOM from 'react-dom';

// 
// 嵌入js表达式
// 
const name = "Tom";
const dv = (
	<div>
		<h1>你好我叫：{name}</h1>
	</div>
);

ReactDOM.render(dv, document.getElementById('root'));
