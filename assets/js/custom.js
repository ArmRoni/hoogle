jQuery(document).ready(function(){

	// slickNav mobile menu
	jQuery('#menu').slicknav({
		label: '',
		openedSymbol:"",
		closedSymbol:"",
		prependTo:'#menu_holder'
	});

	// trigger menu bar
	jQuery('.menu_bar').on("click", function(){
		jQuery('.mobile_menu').slideDown('slow');
	});

	// close menu_bar
	jQuery('.menu_close').on("click", function(){
		jQuery('.mobile_menu').removeClass('mobile_menu_open'); 
		jQuery('.mobile_menu').slideUp('slow'); 
	});

	// Initialize button fixed function
	buttonFixed();
});

// window on scroll function
jQuery(window).on("scroll", function(){
	buttonFixed();
});
// buttonFixed function
// function buttonFixed() {
// 	var offsetTop  = jQuery('.main_container_box').offset().top;
// 	var scrollTop  = jQuery(this).scrollTop();
// 	var elemHeight = jQuery('.main_container_box').height();
// 	var fullHeight = offsetTop + elemHeight;

// 	if( scrollTop > offsetTop && scrollTop < fullHeight ) {
// 		$('.advertisers_txt_wrap').addClass('fixed');
// 	} else {
// 		$('.advertisers_txt_wrap').removeClass('fixed');
// 	}
// }