// 1. 导入react
import React from 'react';
import ReactDOM from 'react-dom';

// 2. 创建React元素
const title = React.createElement('h1',null,'hello world')

// 3. 渲染react元素
ReactDOM.render(title,document.getElementById('root'))
