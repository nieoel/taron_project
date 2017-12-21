/**********************************************
                wow
*********************************************/
$(function() {
  // Handler for .ready() called.
    new WOW().init();

});

/**********************************************
                magnific popup
    http://dimsemenov.com/plugins/magnific-popup/documentation.html#initializing-popup
*********************************************/
$(function() {
$('#work').magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled: true
    }
  // other options
});
});

/*
$('.gallery').each(function(){
  $(this).magnificPopup({
  delegate: 'a', // child items selector, by clicking on it popup will open
  type: 'image',
  gallery:{
    enabled: true
    }
  // other options
});
});
*/


/**********************************************
                team
    http://dimsemenov.com/plugins/magnific-popup/documentation.html#initializing-popup
*********************************************/



$(function(){
  $("#team-members").owlCarousel({
  items : 3,
  autoplay : true,
  smartSpeed : 400,
  loop : true,
  autoplayHoverPause : true
});
});

/**********************************************
              testimonial

*********************************************/

$(function(){
  $("#customers-testimonials").owlCarousel({
  items : 1,
  autoplay : true,
  smartSpeed : 400,
  loop : true,
  autoplayHoverPause : true
});
});


/**********************************************
          counterup
      https://github.com/ciromattia/jquery.counterup
*********************************************/

$(function(){
 $('.counter').counterUp({
    delay: 10,
    time: 2000,
    });
});


/**********************************************
          counterup
      https://github.com/ciromattia/jquery.counterup
*********************************************/

$(function(){
  $("#clients-list").owlCarousel({
  items : 3,
  autoplay : true,
  smartSpeed : 400,
  loop : true,
  autoplayHoverPause : true
});
});
