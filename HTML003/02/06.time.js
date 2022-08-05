// 使用国人习惯的格式来显示时间

// 参数 : dtStr , 时间的字符串
// 返回值 : 本地习惯的时间格式的字符串
function toLocalTime(dtStr) {
	var time = new Date(dtStr);

	var y = time.getFullYear();
	var m = time.getMonth();
	var d = time.getDate();
	var h = time.getHours();
	var mi = time.getMinutes();
	var s = time.getSeconds();

	return `${y}年${m + 1}月${d}日 ${fillZero(h)}:${fillZero(mi)}:${fillZero(s)}`;
}

function fillZero(n) {
	return n < 10 ? `0${n}` : n;
}


module.exports.toLocalTime = toLocalTime;