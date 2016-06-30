$(function() {
	$(document).keyup(function(e) {
		function hasValue(selector) {
			return $.trim($(selector).val()).length;
		}

		if (hasValue('#email') && hasValue('#school') && hasValue('#publication')) {
			$('.button').prop('disabled', false);
		}
		else {
			$('.button').prop('disabled', true);
		}
	});
});