// 1. 导入react
import React from 'react';
import ReactDOM from 'react-dom';

// 2. 使用jsx创建React元素
const title = <h1>hello world <span>这是 span</span></h1>

// 3. 渲染react元素
ReactDOM.render(title,document.getElementById('root'))
