$(function () {
    $("#sendNotification").on("click", function () {
        var data = {
            "notification": {
                "title": $("#exampleTitle").val(),
                "body": $("#exampleBody").val()
            },
            "content_available": true,
            "to": $("#exampleDevice").val()
        }
        var settings = {
            url: "https://fcm.googleapis.com/fcm/send",
            method: "POST",
            headers: {
                "authorization": "key=" + $("#exampleInput").val(),
                "content-type": "application/json"
            },
            "processData": false,
            data: JSON.stringify(data)
        }
        $.ajax(settings).done(function (response) {
            console.log(response);
            $("#output").html(JSON.stringify(response, null, 4));
        });
    });
})