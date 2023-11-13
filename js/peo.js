$(function(){
	var $main = $('main div'),
			$aside = $('aside');
	
	$aside
		.on('click', 'li', function() {
		var i = $(this).index();
		$main.removeClass('on');
		$main.eq(i).addClass('on');
		
		$aside.find('li').removeClass('on');
		$aside.find('li').eq(i).addClass('on');
	});
	
});