$(function () {
    // 全选
	$(".checkall").change(function () {
		$(".j-checkbox , .checkall").prop("checked", $(this).prop("checked"));
        // 添加选中背景颜色
        if($(this).prop("checked")){
            // 让所有商品添加 check-cart-item
            $('.cart-item').addClass('check-cart-item');
        } else {
            $('.cart-item').removeClass('check-cart-item');
        }
		getSum();
	});
    // 小checkbox
	$(".j-checkbox").change(function () {
		if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
			$(".checkall").prop("checked", true);
		} else {
			$(".checkall").prop("checked", false);
		}
        // 添加选中背景颜色
        if($(this).prop("checked")){
            // 让所有商品添加 check-cart-item
            $(this).parents('.cart-item').addClass('check-cart-item');
        } else {
            $(this).parents('.cart-item').removeClass('check-cart-item');
        }
		getSum();
	});
    // 加号
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

    // 减号
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
    // 加减中间的变化
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
    // 计算总和
	function getSum() {
		var $count = 0; // 总件数
		var $money = 0; // 总价钱
        // 购物车里选中的商品计算总和
		$('.j-checkbox:checked').each(function(i, ele) {
			// count += parseInt($(ele).parents('.p-checkbox').siblings('.p-num').children().children('.itxt').val());
			$count += parseInt($(ele).parents('.p-checkbox').siblings('.p-num').find('.itxt').val());
			$money += parseFloat($(ele).parents('.p-checkbox').siblings('.p-sum').text().substr(1));
		});
		$('.amount-sum em').text($count);
		$('.price-sum em').html( '￥' + $money.toFixed(2));
	}

    // 行中删除按钮 
    $('.p-action>a').click(function(){
        if(confirm('确认删除这件商品?')){
            $(this).parents('.cart-item').remove();
        }
        getSum();
    })

    // 下方删除
	$(".price-sum em").click(function () {
		// 删除当前物品
		$(this).parents(".cart-item").remove();
        getSum();
	});
	// 删除选中的商品
	$(".remove-batch").click(function () {
		// 删除小复选框选中的
		$(".j-checkbox:checked").parents(".cart-item").remove();
        getSum();
	});
    // 清空购物车  删除所有
    $('.clear-all').click(function(){
        $(".cart-item").remove();
        getSum();
    })
});
