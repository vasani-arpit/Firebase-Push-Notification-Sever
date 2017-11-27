$(function () {
    $("#sendNotification").on("click", function () {
        var data = {            
            "to": $("#exampleDevice").val(),
            "data":{
                "title": $("#exampleTitle").val(),
                "message":$("#exampleBody").val(),
                "sound": "default",
                "badge": 1
            }
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