$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('lock')
	});
	$('.header__phone').click(function(event){
		$('.header__phone-number').toggleClass('number');
	});
});

// Навигационый пункт

function scrollNav() {
	$('.page__navigation a').click(function(){
	//   $(".active").removeClass("active");     
	//   $(this).addClass("active");
	  
	  $('html, body').stop().animate({
		 scrollTop: $($(this).attr('href')).offset().top - 160
	  }, 300);
	  return false;
	});
 }
 scrollNav();

 // Навигационый пункт