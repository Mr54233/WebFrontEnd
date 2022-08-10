class Pager {
	// pageIndex : 当前页面 , pageSize : 每页条数 , total:总条数
	constructor(pageIndex, pageSize, total) {
		this.pageIndex = pageIndex;
		this.pageSize = pageSize;
		this.total = total;

		this.pages = Math.ceil(total / this.pageSize); // 总页数
		this.isFirstPage = pageIndex === 1; // true , 当前页是第一页
		this.isLastPage = pageIndex === this.pages; // true , 当前页是最后一页
		this.prev = pageIndex - 1;
		this.next = pageIndex + 1;
	}

	// 根据当前页码和分页导航控件中显示li的个数 , 计算当前需要显示的页码
	getNums(count) {
		var nums = [];
		var times = parseInt(this.pageIndex / count);
		var start = times * count + 1;
		var end = (times + 1) * count;

		end = end <= this.pages ? end : this.pages;

		for (var i = start; i <= end; i++) {
			nums.push(i);
		}

		return nums;
	}
}

// 导出类
module.exports = Pager;
