$(document).ready(function() {
    var $form = $('form');

    if ($form.length > 0) {
        $('form input[type="submit"]').on('click', function(event) {
            if (event) event.preventDefault();

            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: $form.serialize(),
                cache: false,
                dataType: 'jsonp',
                jsonp: 'c',
                contentType: 'application/jsonp; charset=utf-8',
                error: function(err) {
                    $('.message').css('display', 'block');
                    $('.message').html("Could not connect to the registration server. Please try again later.");
                    $('.message').delay(3000).fadeOut('slow');
                },
                success: function(data) {
                    $('.message').css('display', 'block');

                    if (data.result != "success") {
                        var result = data.msg.split(' - ');
                        var display = result[1];

                        if (display[display.length-1] !== '.') {
                            display += '.';
                        }

                        $('.message').html(display);
                    } else {
                        $('.message').html('You have been subscribed. Please check your email to confirm your subscription.');
                        $('input[type="text"], input[type="email"]').val('');
                    			$('.button').prop('disabled', true);
                    }

                    $('.message').delay(3000).fadeOut('slow');
                }
            });
        });
    }
});
