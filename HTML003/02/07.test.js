// 导入自定义模块
// const time = require("./06.time");

// console.log(time.toLocalTime("2022/8/5/ 8:9:12"));

const moment = require('moment')
moment();
console.log(moment().format(`YYYY-MM-DD`))
