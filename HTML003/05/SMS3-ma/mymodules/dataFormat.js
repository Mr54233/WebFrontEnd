const sex = ['男','女']
const departs = ['前端与移动开发','Java','人工智能','大数据','物联网'];
const hobby = ['编码','打篮球','睡觉'];

function format(stu){
    stu.sex = sex[stu.sex];
    stu.depart = departs[stu.depart];
    for (var i = 0;i<stu.hobby.length;i++) {
        stu.hobby[i]=hobby[stu.hobby[i]];
    }
    return stu; 
}

module.exports = {
    format
}