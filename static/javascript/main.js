var menuopen = 0;
$(document).ready(function(){
  $(window).scroll(function(){
    var marginTop = $(window).scrollTop();
    var limit = $(".joblistcontainer").height() - $(".joblist").height()-40;
        if(marginTop < limit ){
            $(".joblist").css("margin-top",marginTop);
        }
  });
  setTimeout(function(){
    if($(window).width() >= 768){
      $('.latest-pulse').height(($('.node img').height())*2+2);
      $('.latest-pulse li').height(($('.latest-pulse').height()-$('.latest-pulse').height()/10)/6);
      $('.latest-pulse li:first').height($('.latest-pulse').height()/10);
      $('.pulsejobs .left').height($('.pulsejobs .right').height()-6);
      $('.pulseevents .left').height($('.pulseevents .right').height()-6);
      if($(window).width() > 768 && $(window).width() < 992){
        $('.home .jobs, .home .events').css('min-height',$('.node img').height());
      }else{
        $('.home .jobs, .home .events').css('min-height',$('.node img').height()/2-5);
      }
    }
    $('.banner .col-sm-4').height($('.banner-single').height());
  },1500);
  $('.banner').flexslider();
  $('.menuopen').click(function(){
    if(menuopen == 0){
      $('.menuopen').css('left',100);
      $('.left-sidebar').css('left',0);
      menuopen = 1
    }else{
      $('.menuopen').css('left',0);
      $('.left-sidebar').css('left',-100);
      menuopen = 0
    }
  });
  $(".paginate").quickPagination({pagerLocation:"bottom",pageSize:"10"});
  $.fn.stars = function() {
    return $(this).each(function() {
        // Get the value
        var val = parseFloat($(this).html());
        // Make sure that the value is in 0 - 5 range, multiply to get width
        var size = Math.max(0, (Math.min(5, val))) * 16;
        // Create stars holder
        var $span = $('<span />').width(size);
        // Replace the numerical value with stars
        $(this).html($span);
    });
  };
  $(function() {
    $('span.stars').stars();
  });
  $('.section-category-item i').on('click',function(){
    $(this).parent().parent().find(".overlay").animate({top:0});
    console.log('radi');
  });
  $('.section-category-item .overlay i').on('click',function(){
    $(this).parent().animate({top:'100%'});
  });
});
$(window).resize(function(){
  if($(window).width() >= 768){
    $('.latest-pulse').height(($('.node img').height())*2+2);
    $('.latest-pulse li').height(($('.latest-pulse').height()-$('.latest-pulse').height()/10)/6);
    $('.latest-pulse li:first').height($('.latest-pulse').height()/10);
    if($(window).width() > 768 && $(window).width() < 992){
      $('.home .jobs, .home .events').css('min-height',$('.node img').height());
    }else{
      $('.home .jobs, .home .events').css('min-height',$('.node img').height()/2-5);
    }
  }
  $('.banner .col-sm-4').height($('.banner-single').height());
});
