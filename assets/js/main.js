$(document).ready(function(){
	//Inits
	initCarousel();
});

function initCarousel(){
	$('.owl-carousel').owlCarousel({
		loop: true,
		responsiveClass: true,
		autoplay: true,
		nav: false,
		responsive:{
			0: {
				items:1
			}
		}
	})
}