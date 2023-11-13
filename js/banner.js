$(function () {

 $('.banner').each(function () {

  //html요소를 jQuery 객체로 변환하는 변수선언
  var $banner = $(this),
   $slides = $banner.find('.slides'),
   $pic = $slides.find('.pic'),
   $button = $banner.find('.button'),
   $indicator = $banner.find('.indicator');

  // 일반적인 변수선언(수식, 문자열)
  var count = $pic.length,
   sp = 1500,
   easing = 'easeOutExpo',
   interval = 5000,
   currentIndex = 0,
   indicatorHTML = '',
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
   indicatorHTML += '<a href="#"><i class="fa fa-circle"></i></a>';
  });

  $indicator.html(indicatorHTML);


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

   var $prev = $button.find('.prev'),
    $next = $button.find('.next');

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

   //인디케이터 연동시키기(색상변경)
   $indicator.find('a').removeClass('on');
   $indicator.find('a').eq(currentIndex).addClass('on');
   
  }


  // 4. '이전','다음' 버튼 작동 시키기
  $button.on('click', 'a', function (e) {
   e.preventDefault();

   if ($(this).hasClass('next')) {
    play(currentIndex + 1)
   } else {
    play(currentIndex - 1)
   }
  });


  // 5.인디케이터 버튼 작동 시키기
  $indicator.on('click','a',function(e){
   e.preventDefault();
   /*
   var i = $(this).index();
    play(i);
   */
   var i = $(this).index();
   
   if(!$(this).hasClass('on')){
    play(i)
   }
   
  });
  
  
  // 6.타이머 실행시키는 함수 만들기
  function startTimer() {
   timer = setInterval(function(){
    
    var nextIndex = (currentIndex + 1) % count;
    
    play(nextIndex);
   }, interval);
  }
  
  
  
  // 6-1.타이머 정지시키는 함수 만들기
  function stopTimer() {
   clearInterval(timer);
  }
  
  
  
  // 7.마우스가 올라오면 정지, 벗어나면 실행시키기
  $banner.on({
   mouseenter: stopTimer,
   mouseleave: startTimer
  });  
  

  // 8.재생 함수와 타이머 실행시키기
  play(currentIndex);
  startTimer();
  
 });

});
