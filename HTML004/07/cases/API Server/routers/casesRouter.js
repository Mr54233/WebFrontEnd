const express = require("express");

const {
	addList,
	getList,
	markComplete,
	clearComplete,
	getTotal,
	getSingle,
	clearSelect,
} = require("../database/cases");

const route = express.Router();

// 添加待办事项
route.post("/addList", async (req, res) => {
	var title = req.body.title;
	var result = (await getSingle(title)).length;
	if (!result) {
		var addResult = await addList(title);
		if (addResult === 1) {
			res.send({
				status: 1,
				message: "添加成功",
			});
		} else {
			res.send({
				status: 0,
				message: "添加失败",
			});
		}
	} else {
		res.send({
			status: 0,
			message: "待办已存在 , 请修改后重试",
		});
	}
});

// 获取列表数据
route.get("/getList", async (req, res) => {
	var caseData = await getList();
	res.send(caseData);
});

// 标记事情已经完成和取消完成标记
route.post("/markAsCom", async (req, res) => {
	var id = req.body.id;
	var markResult = await markComplete(id);
	if (markResult.affectedRows === 1) {
		res.send({
			status: 1,
			message: "标记成功",
		});
	} else {
		res.send({
			status: 0,
			message: "标记失败",
		});
	}
});

// 清除所有已经完成的事情
route.post("/clearCom", async (req, res) => {
	var clearResult = await clearComplete();
	if (clearResult.affectedRows) {
		res.send({
			status: 1,
			message: "清除成功",
		});
	} else {
		res.send({
			status: 0,
			message: "没有已完成待办或者清楚失败",
		});
	}
});

// 删除单个待办
route.post("/clearSelect", async (req, res) => {
	var id = req.body.id
	var clearResult = await clearSelect(id);
	if (clearResult.affectedRows) {
		res.send({
			status: 1,
			message: "删除成功",
		});
	} else {
		res.send({
			status: 0,
			message: "删除失败",
		});
	}
});

// 统计还有多少件没有完成的事情
route.get('/getTotal', async (req,res)=>{
    var totalResult = await getTotal()
    res.send({
        status:1,
        message:'查询成功',
        data:totalResult
    })
})

module.exports = route;
