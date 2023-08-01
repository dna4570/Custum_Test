// $(function() {
//   $("a").click(function(){

//     alert($(this).attr("href"));

//     return false;
//   });
// });
function FixedAnime() {
  var headerH = $('#header').outerHeight(true);
  var scroll = $(window).scrollTop();
  if(scroll >= headerH){
    $('#header').addClass('fixed');
  }else{
    $('#header').removeClass('fixed');
  }
}

//画面をスクロールしたら動かしたい場合の記述

$('#g-navi a').click(function(){
  var elmHash = $(this).attr('href');
  var pos = Math.round($(elmHash).offset().top-120);

  $('body,html').animate({scrollTop:pos},500);
  return false;
});

$(window).scroll(function() {
  FixedAnime();
});

$(window).on('lord', function(){
  FixedAnime();
});