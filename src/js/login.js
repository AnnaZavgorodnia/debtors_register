$("#submitBtn").click(function () {

    var username = $("#username").val().trim();
    var password = $("#password").val().trim();
    
    var mode = 'user';

    if (username === 'admin')
        window.location = "search_debtor.html";
    else
        $("#message").html('Неправильний пароль або логін');


    //if (username !== "" && password !== "") {

    // $.ajax({
    //     url: 'ЗАПРОС НА ТВІЙ СЕРВЕР НАХ',
    //     type: 'post',
    //     data: {username: username, password: password},
    //     success: function (response) {
    //         var msg = "";
    //         if (response === 'admin') {
    //             mode = 'admin';
    //         } else if (response === 'register') {
    //             mode = 'register'
    //         } else {
    //             msg = "Неправильний пароль або логін";
    //         }
    //         window.location = "search_debtor.html";
    //         $("#message").html(msg);
    //     }
    // });
    //}
});

$("#login-form").submit(function (e) {
    e.preventDefault();
});

