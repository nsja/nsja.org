$(document).ready( function () {
    var $form = $('form');

    if ($form.length > 0) {
        $('form input[type="submit"]').bind('click', function (event) {
            if (event) event.preventDefault();

            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache       : false,
                dataType    : 'json',
                contentType : "application/json; charset=utf-8",
                error       : function(err) {
                  $('.message').css('display','block');
                  $('.message').html("Could not connect to the registration server. Please try again later.");
                  $('.message').delay(3000).fadeOut('slow');
                },
                success     : function(data) {
                  $('.message').css('display','block');

                    if (data.result != "success") {
                        var result = data.msg;
                        $('.message').html(result);
                    } else {
                        $('.message').html('You have been subscribed. Please check your email to confirm your subscription.');
                    }

                    $('.message').delay(3000).fadeOut('slow');
                }
            });
        });
    }
});
