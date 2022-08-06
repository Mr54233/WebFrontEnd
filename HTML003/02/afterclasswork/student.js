/**
 * student.js模块:
 * 用于数据操作,只处理数据,不关心业务
 */
// 加载相关模块
var fs = require('fs');
var dbPath = './data.json';
// 获取所有学生数据列表
exports.find = function (callback) {
    // callback有两个参数:第一个是err,第二个是data
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return (callback(err))
        }
        callback(null, JSON.parse(data).students)
    });
};
// 根据no获取学生信息对象
exports.findByNo = function (no, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students;
        var ret = students.find(function (item) {
            return item.no === parseInt(no)
        });
        callback(null, ret)
    });
}
// 添加保存学生数据列表
exports.save = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students
        // 处理no唯一的,不重复
        student.no = students[students.length - 1].no + 1
        // 保存到数组
        students.push(student)
        // 转为字符串
        var fileDate = JSON.stringify({ students: students })
        // 保存到文件
        fs.writeFile(dbPath, fileDate, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        })
    });
};
// 更新学生数据列表
exports.updateByNo = function (student, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students;
        student.no = parseInt(student.no);
        // find 是ecmascript6的方法
        var stu = students.find(function (item) {
            return item.no === student.no
        });
        // 遍历拷贝对象
        for (var key in student) {
            stu[key] = student[key]
        }
        // 把对象数据转为字符串
        var fileDate = JSON.stringify({
            students: students
        });
        // 保存到文件
        fs.writeFile(dbPath, fileDate, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        });
    });
};
// 删除学生数据
exports.deleteByNo = function (no, callback) {
    fs.readFile(dbPath, 'utf8', function (err, data) {
        if (err) {
            return callback(err)
        }
        var students = JSON.parse(data).students;
        var deleteNo = students.findIndex(function (item) {
            return item.no === parseInt(no)
        });
        students.splice(deleteNo, 1);
        var fileDate = JSON.stringify({ students: students });
        fs.writeFile(dbPath, fileDate, function (err) {
            if (err) {
                return callback(err)
            }
            callback(null)
        });
    })
}