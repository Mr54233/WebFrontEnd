// 格式化传入的学生数据 ， 返回可视化数据
const sex = ["男", "女"];
const departs = ["前端与移动开发", "Java", "人工智能", "大数据", "物联网"];
const hobby = ["编码", "打篮球", "睡觉"];

function format(stu) {
	stu.sex = sex[stu.sex];
	stu.depart = departs[stu.depart];

	// 遍历出复选框选中的所有爱好
	for (var i = 0; i < stu.hobby.length; i++) {
		stu.hobby[i] = hobby[stu.hobby[i]];
	}
	stu.hobby = String(stu.hobby);
	return stu;
}

module.exports = {
	format,
};
