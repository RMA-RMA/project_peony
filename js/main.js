$(function(){
	$('#gnb > li')
		.on('mouseover', function () {
			$(this).stop().animate({
				
			}, function(){
				$(this).find('ul').stop().animate({
					'z-index': '4',
					'opacity' : '1'
				});
			});

	})
		.on('mouseleave', function () {
			$(this).find('ul').stop().animate({
					'z-index': 0,
					'opacity' : 0
				});
		});

	
	
	});