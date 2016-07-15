// SINGLET V.1 //
// Copyright 2012, Mandar Shirke //
// www.quadcodes.com

// --------- INIT JS ---------  //

// -- 1. FULLSCREEN INTRO DIMENSIONS --  //
// -- 2. SCROLL TO --  //
// -- 3. EQUAL HEIGHT --  //
// -- 4. TIPSY --  //
// -- 5. QUOTES --  //
// -- 6. FITVIDS  --  //
// -- 7. PRETTYPHOTO --  //
// -- 8. MOBILE DROP DOWN MENU --  //
// -- 9. CAROUSEL --  //
// -- 10. SCROLL FUNCTIONS --  //
// -- 11. JSOCIAL --  //
// -- 12. RESPONSIVE SLIDER --  //
// -- 13. TABS --  //
// -- 14. CONTACT FORM --  //
// -- 15. MISCELLANEOUS --  //

// --------------------------  //

$(document).ready(function() {

// --------------------  //


// --------- 1. FULLSCREEN INTRO DIMENSIONS ----------  //

$('#qcFS').width($(window).width()).height($(window).height());
$('#qcFS .qcContainer').height($(window).height());

/*
$(window).bind('resize',function(){
     window.location.href = window.location.href;
});
*/

// --------- 2. SCROLL TO ----------  //

$('#qcPrimaryNav ul').onePageNav({
	currentClass: 'current',
	changeHash: false,
	easing: 'jswing',
	scrollSpeed: 500,
	scrollOffset: 0,
	scrollThreshold: 0.1,
	filter: ':not(.external)',	
	begin: false,
	end: false,
	scrollChange: false
});


// --------- 3. EQUAL HEIGHT ----------  //

$(window).load(function() {
	$('.qcContainer .about').equalHeights();
	$('.qcContainer .contact').equalHeights();
	$('.qcContainer .service').equalHeights();
	$('.qcContainer .client').equalHeights();
});


// --------- 4. TIPSY ----------  //

$('.tips').tipsy({gravity: 's'});


// --------- 5. QUOTES ----------  //

$('.qcQuotes').innerfade({
	animationtype: 'fade', 
	speed: 'slow', 
	timeout: 6000, 
	type: 'random_start'
});


// --------- 6. FITVIDS ----------  //

$(".qcFitVids").fitVids();


// --------- 7. PRETTYPHOTO ----------  //

$("a[rel^='prettyPhoto']").prettyPhoto();


// --------- 8. MOBILE DROP DOWN MENU ----------  //

$('#dd-menu').change(function() {
  window.location = $(this).val();
});


// --------- 9. CAROUSEL ----------  //

if ($('.qcContainer').width() < 768) {
	v1 = 1;
	v2 = 1;
} else {
	v1 = 4;
	v2 = 2;
};
$('#qcPortfolioGrid').carousel({
	itemsPerPage: v1,
	itemsPerTransition: v1,
	easing: 'linear',
	noOfRows: v2
});

// Hover Overlay
$('#qcPortfolioGrid li').hover(function() {
	$('.qcCarouselOverlay', this).fadeIn();
}, function() {
	$('.qcCarouselOverlay', this).fadeOut();
});


// --------- 10. SCROLL FUNCTIONS ----------  //

$('.qcScrollTop').click(function(){
	$('html, body').animate({scrollTop:0}, { duration: 'slow', easing: 'jswing'});
	return false;
});

$('#qcScrollToWork').click(function(){
	$('html, body').animate({scrollTop:$(window).height()}, { duration: 'medium', easing: 'jswing', complete: function() { $('#qcPrimaryNav').fadeIn() } });
	return false;
});

// Show / Hide Navigation
$(document).scroll(function() {
	if( $(this).scrollTop() >= $(window).height()) {
		$('#qcPrimaryNav').not('.nh').fadeIn();
	} else {
		$('#qcPrimaryNav').not('.nh').hide();
	}
});


// --------- 11. JSOCIAL ----------  //


// Facebook & Twitter Followers Count
var f_page = "postscapes"; // the page name for your fan page, e.g. the 'wvumountaineers' part of http://facebook.com/wvumountaineers
var t_page = "postscapes"; // the account name for your main twitter account

function add_commas(number) {
if (number.length > 3) {
var mod = number.length % 3;
var output = (mod > 0 ? (number.substring(0,mod)) : '');
for (i=0 ; i < Math.floor(number.length / 3); i++) {
if ((mod == 0) && (i == 0)) {
output += number.substring(mod+ 3 * i, mod + 3 * i + 3);
} else {
output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
}
}
return (output);
} else {
return number;
}
}

// when document is ready load the counts
$(document).ready(function(){

// grab from facebook
$.getJSON('https://graph.facebook.com/'+f_page+'?callback=?', function(data) {
var fb_count = data['likes'].toString();
fb_count = add_commas(fb_count);
$('#fb_count').html(fb_count);
});

// grab from twitter
$.getJSON('http://api.twitter.com/1/users/show.json?screen_name='+t_page+'&callback=?', function(data) {
twit_count = data['followers_count'].toString();
twit_count = add_commas(twit_count);
$('#twitter_count').html(twit_count);
});

});


// --------- 12. RESPONSIVE SLIDER ----------  //

$(".rslides").responsiveSlides({
	auto: false,
	pager: true,
	nav: true,
	speed: 500,
	maxwidth: 960,
	namespace: "centered-btns"
});

// Hover Overlay
$('.rslides li, .centered-btns_nav, .centered-btns_tabs').hover(function() {
	$('.rslides_content').show();
}, function() {
	$('.rslides_content').hide();
});


// --------- 13. TABS ----------  //

$('.tabs a').click(function(){
	switch_tabs($(this));
}); 
switch_tabs($('.defaulttab')); 
function switch_tabs(obj) {
	$('.tab-content').hide();
	$('.tabs a').removeClass("selected");
	var id = obj.attr("rel"); 
	$('#'+id).fadeIn(500);
	obj.addClass("selected");
}


// --------- 14. CONTACT FORM ----------  //

$('.qcForm').submit(function() {
		$(this).find('.error').remove();
		var hasError = false;
		$(this).find('.requiredField').each(function() {
			if($.trim($(this).val()) == '') {
				var labelText = $(this).prev( 'label').text();
				$(this).parent().append( '<span class="error">You forgot to enter your '+labelText+'</span>' );
				$(this).addClass( 'inputError' );
				hasError = true;
			} else if($(this).hasClass( 'email')) {
				var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
				if(!emailReg.test($.trim($(this).val()))) {
					var labelText = $(this).prev( 'label').text();
					$(this).parent().append( '<span class="error">You have entered an invalid '+labelText+'</span>' );
					$(this).addClass( 'inputError' );
					hasError = true;
				}
			}
		});
		if(!hasError) {
			var formInput = $(this).serialize();
			var hideForm = $(this);
			$.post($(this).attr('action'),formInput, function(data){
				$(hideForm).slideUp( "fast", function() {				   
					$(this).before( '<br/><p class="info">Thanks! Your email was successfully sent.</p>' );
				});
			});
		}
		return false;
});

// --------- 15. MISCELLANEOUS  ----------  //

$('.qcTeam li').hover(function() {
	$('.qcEmployeeImage img', this).toggleClass('hover');
});

$('.qcBlogEntry').hover(function() {
	$('.qcPostFormat', this).toggleClass('hover');
});

$('.qcColumnWrapper .three.columns:nth-child(3), .qcColumnWrapper .four.columns:nth-child(4)').nextAll().addClass('border-top');
$('.qcColumnWrapper .three.columns:nth-child(3n), .qcColumnWrapper .four.columns:nth-child(4n)').addClass('last');
$('.qcColumnWrapper .two.columns:nth-child(1)').addClass('first');

// --------------------  //
  
});