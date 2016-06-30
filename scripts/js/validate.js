$(function() {
	function validate() {
		function hasValue(selector) {
			return $.trim($(selector).val()).length;
		}

		if (hasValue('#email') && hasValue('#school') && hasValue('#publication')) {
			$('.button').prop('disabled', false);
		}
		else {
			$('.button').prop('disabled', true);
		}
	}

	// If jQuery is super slow to load we still want the button to show up
	setInterval(function() {
		validate();
	}, 1000);

	// When the user releases a key
	$(document).keyup(function() {
		validate();
	});
});