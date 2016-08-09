$(document).ready(function () {
  var btn = $('request');
  var textbox = ('textbox');
  var yoda_url = 'http://127.0.0.1:65165/';


    $("#request").on('click', function () {

        $.ajax({
            url: 'https://yoda.p.mashape.com/yoda', // The URL to the API. You can get this by clicking on "Show CURL example" from an API profile
            type: 'GET', // The HTTP Method
            data: {sentence: $("#textbox").val()}, // Parameters go here
            datatype: 'json',
            success: function (data) {
               $("#output").html(data);
                //  alert(data);
            },
            error: function (err) {
                alert(err);
            },
            beforeSend: function (xhr) {
                xhr.setRequestHeader("X-Mashape-Authorization", "azflzXuEgkmsh3c9okmDS9NxDCXzp1fmi3wjsn3GJaudAo5kJs"); // Enter your Mashape key here
            }
        });
    });
});
