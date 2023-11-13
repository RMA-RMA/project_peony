$(function(){

	//section의 목록
	$('section >ul').on('click','li',function(){
	 $('section').find('main').removeClass('on')
	
		var i = $(this).index();
		$('main').eq(i).addClass('on');
	
	$('section >ul').find('li').removeClass('on');
		$(this).addClass('on');

 });
	
	
	//section 의 목록 스크롤 고정
	
	/*윈도우로부터 떨어진 section>ul=ulscroll의 간격과 패딩포함한 this의 높이값을 wrapheight라하자
	
	ulscroll가 위에서 떨어진 높이값=uloffsettop
	윈도우가 위에서부터 떨어진 높이값=scrolltop
	
	만약에 윈도우에 기준에 따라 윈도우가 위에서부터 떨어지 높이값이 wrapheight높이값보다 높다면 class이름에 on을 붙이고 아니면 없애라 
	*/
		$('section >ul').each(function(){
		var $win =$(window),
				$ulscroll= $(this),
				wrapHeight=$('.disc >p:nth-of-type(2)').height(),
				ulOffsetTop=$ulscroll.offset().top,
				 scrollTop = $win.scrollTop();

			
$win.on('scroll',function(){
	
	if($win.scrollTop()>wrapHeight){
		$ulscroll.addClass('on')
	}else{
		$ulscroll.removeClass('on')
	};


	});
		$win.trigger('scroll');
		});
	
	
	$('.top').each(function(){
		var $win =$(window),
				$ulscroll= $(this),
				wrapHeight=$('.disc >p:nth-of-type(2)').height(),
				ulOffsetTop=$ulscroll.offset().top,
				 scrollTop = $win.scrollTop(),
		$iconTop = $(this);
		
$win.on('scroll',function(){
	
	if($win.scrollTop()>wrapHeight){
		$iconTop.addClass('on')
	}else{
		$iconTop.removeClass('on')
	};
});
	
	})
	

	});//마지막