
			var box = document.querySelector(".box");
			var divs = box.querySelectorAll("div");

			function fillZero(val, isHour) {
				return val < 10 ? "0" + val : val.toString();
			}

			setInterval(function () {
				var now = new Date();
				var hour = now.getHours();
				var minute = now.getMinutes();
				var second = now.getSeconds();

				divs[0].innerHTML = fillZero(hour);
				divs[2].innerHTML = fillZero(minute);
				divs[4].innerHTML = fillZero(second);
			}, 1000);
		