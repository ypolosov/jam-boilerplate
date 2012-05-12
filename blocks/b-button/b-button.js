var bButton = {
	init: function() {
		$(".b-button").click(function() {
			bButton.clicked;
		});
	},
	clicked: function() {
	}
}

$(document).ready(bButton.init);