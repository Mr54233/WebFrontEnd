$("#submit").click((e) => {
    e.preventDefault();
    $.ajax({
        type: "post",
        url: "http://127.0.0.1:3000/api/user/login",
        data: {
            uname: $("#uname").val(),
            password: $("#password").val(),
        },
        dataType: "json",
        success: function (response) {
            if (response.status === 555) {
                $("#message")
                    .html(response.message)
                    .css("display", "block")
                    .css("color", "red");
            } else if (response.status === 200) {
                $("#message")
                    .html(response.message)
                    .css("display", "block")
                    .css("color", "green");
                setTimeout(() => {
                    location.href = "index.html";
                }, 100);
                // 将token存储在本地
                localStorage.token=response.token;
            }
        },
    });
});

$('#reg').click(()=>{
    location.href = 'reg.html'
})