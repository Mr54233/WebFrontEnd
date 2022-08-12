// 分页组件模块
class Pager {
	// 定义分页控件的属性
	constructor(pageIndex, pageSize, total, count) {
		this.pageIndex = pageIndex; // 当前的页码 , 来自于页面的请求
		this.pagerSize = pageSize; // 每页条数 , 由开发者或者客户决定
		this.total = total; // 数据的总个数 , 总记录数 , 数据库中的表中的数据行数决定
		this.count = count; // 分页控件中显示页码的个数 , 由开发者或者客户来决定

		this.pages = Math.ceil(total / pageSize); // 总页数 , 向上取整 , 不满一页的也要占用一页

		// 计算出分页控件中需要显示的所有页码
		var times = parseInt((pageIndex - 1) / count); // 次数
		this.nums = [];
		var end = (times + 1) * count;
		end = end > this.pages ? this.pages : end;
		for (var i = 1; i <= end; i++) {
			this.nums.push(times * count + i);
		}

		this.prev = this.nums[0] - 1; // 上翻一页的页码
		this.next = this.nums[count - 1] + 1; // 下翻一页的页码
		this.isFirstPage = this.nums[0] === 1; // 第一个页码=1 , 说明就是第一页 
		this.isLastPage = this.nums[count - 1] === this.pages; // 最后一个页码=总页数 , 说明到达了最后一页
	}
}

module.exports = Pager;
