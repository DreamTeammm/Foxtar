

// page init
jQuery(function(){
	initBurger();
	initPopup();
});

// init burger
function initBurger() {
	jQuery('.toggle-menu').on('click', function () {
		jQuery('.menu').toggleClass('open');
	});

};

function initPopup(){
  jQuery('button').click(function initPopup(){
    jQuery('.popup,.popup_overlay').fadeIn(400); //показываем всплывающее окно
  });
  jQuery('.closer,.popup_overlay').click(function(){
    jQuery('.popup,.popup_overlay').fadeOut(400); //скрываем всплывающее окно
  });
};
