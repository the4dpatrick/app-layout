$(function(){
	setInterval(function() {
		var nextItem = $('.screen.active').fadeOut().removeClass('active').next('.screen');

		if (nextItem.length === 0) {
			nextItem = $('.screen').first();
		}
		
		nextItem.fadeIn().addClass('active ');
	}, 3000)
})