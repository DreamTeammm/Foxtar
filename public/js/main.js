$(function(){
	$('.toggle-menu').on('click',function(){
		$('.menu').toggleClass('open');
	});
});

$(function(){
  $('button').click(function(){
    $('.popup,.popup_overlay').fadeIn(400); //показываем всплывающее окно
  });
  $('.closer,.popup_overlay').click(function(){
    $('.popup,.popup_overlay').fadeOut(400); //скрываем всплывающее окно
  });
});