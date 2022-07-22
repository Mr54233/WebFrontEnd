$(function () {
	$(".checkall").change(function () {
		$(".j-checkbox , .checkall").prop("checked", $(this).prop("checked"));
	});
	$(".j-checkbox").change(function () {
		if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
			$(".checkall").prop("checked", true);
		} else {
			$(".checkall").prop("checked", false);
		}
	});
	$(".increment").click(function () {
		var $n = $(this).siblings(".itxt").val();
		$n++;
		$(this).siblings(".itxt").val($n);
		var $p = $(this).parents(".p-num").siblings(".p-price").html();
		$p = $p.substr(1);
		var $price = ($p * $n).toFixed(2);
		$(this)
			.parents(".p-num")
			.siblings(".p-sum")
			.html("￥" + $price);
		getSum();
	});
	$(".decrement").click(function () {
		var $n = $(this).siblings(".itxt").val();
		if ($n == 1) {
			return false;
		}
		$n--;
		$(this).siblings(".itxt").val($n);
		var $p = $(this).parents(".p-num").siblings(".p-price").html();
		$p = $p.substr(1);
		var $price = ($p * $n).toFixed(2);
		$(this)
			.parents(".p-num")
			.siblings(".p-sum")
			.html("￥" + $price);
		getSum();
	});
	$(".itxt").change(function () {
		var $n = $(this).val();
		var $p = $(this).parents(".p-num").siblings(".p-price").html();
		$p = $p.substr(1);
		var $price = ($p * $n).toFixed(2);
		$(this)
			.parents(".p-num")
			.siblings(".p-sum")
			.html("￥" + $price);
		getSum();
	});

    getSum();
	function getSum() {
		var $count = 0; // 简书
		var $money = 0; // 总价钱
		$(".itxt").each(function (i, ele) {
			$count += parseInt($(ele).val());
		});
		$(".amount-sum em").text($count);
        $('.p-sum').each(function(i,ele){
            $money += parseFloat($(ele).text().substr(1))
        })
        $('.price-sum em').text("￥" + $money.toFixed(2))
	}
});
