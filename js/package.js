$(function(){
	//탭 설정
 $('#tabMenu').each(function(){
  var $tablist = $(this).find('#tablist'),
      $anchor = $tablist.find('a'),
      $article = $(this).find('article');
  
  $tablist.on('click','a',function(e){
   e.preventDefault();
   
   var $this = $(this);
   
   if($this.hasClass('on')){
    return;
   }
   $anchor.removeClass('on');
   $this.addClass('on');
   $article.hide();
   $($this.attr('href')).fadeIn();
   
  });
  
  $anchor.eq(0).trigger('click');
  
 });
	

 $('.box').each(function () {

  //html요소를 jQuery 객체로 변환하는 변수선언
  var $banner = $(this),
   $slides = $banner.find('.slides'),
   $pic = $slides.find('.pic'),
   $nav = $banner.find('.nav');
	 
  // 일반적인 변수선언(수식, 문자열)
  var count = $pic.length,
   sp = 1500,
   easing = 'easeOutExpo',
   interval = 5000,
   currentIndex = 0,
   timer;

  /*
  count: 슬라이드 이미지의 총 갯 수
  sp: 자동재생 속도
  easing: '가속도 함수'
  interval: 재생 주기(5초마다 실행)
  currentIndex: 현재 이미지의 순서값
  indicatorHTML: '앵커태그 삽입' (문자열)
  timer 마우스오버 시 타이머 정지시킬 때 사용.
  */


  // 1.이미지 배치(기차), 인디케이터 만들고 삽입하기
  $pic.each(function (i) {
   $(this).css({
    left: 100 * i + '%'
   });
  });



  // 2.슬라이드 재생 함수 만들기
  function play(i) {
   $slides.animate({
    left: -100 * i + '%'
   }, sp, easing);
   currentIndex = i;
   updateNav();
  }


  // 3.인디케이터 상태 업데이트 함수 만들기
  function updateNav() {

   var $prev = $nav.find('.prev'),
    $next = $nav.find('.next');

   //첫 번째 이미지라면 '.prev' 숨김
   if (currentIndex == 0) {
    $prev.addClass('on')
   } else {
    $prev.removeClass('on')
   }

   //마지막 이미지라면 '.next' 숨김
   if (currentIndex == count - 1) {
    $next.addClass('on')
   } else {
    $next.removeClass('on')
   }

   
  }


  // 4. '이전','다음' 버튼 작동 시키기
  $nav.on('click', 'a', function (e) {
   e.preventDefault();

   if ($(this).hasClass('next')) {
    play(currentIndex + 1)
   } else {
    play(currentIndex - 1)
   }
  });

  // 8.재생 함수와 타이머 실행시키기
  play(currentIndex);
  
 });
	
});


