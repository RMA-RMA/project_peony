$(function () {

	$('section article')
		.on('mouseover', function () {
			$(this).find('span').stop().animate({
				'opacity': '0.8'
			}, function () {
				$(this).find('p').stop().animate({
					'left': '70%'
				});
			});
		})
		.on('mouseleave', function () {
			$(this).find('span').stop().animate({
				'opacity': 0
			});
			$(this).find('p').stop().animate({
				'left': '100%'
			});
		});

});
