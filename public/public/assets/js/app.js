var GPTHEME = GPTHEME || {};

(function($) {

  // USE STRICT
  "use strict";

  GPTHEME.initialize = {

    init: function() {
      GPTHEME.initialize.general();

    },

    /*========================================================*/
    /*=           Collection of snippet and tweaks           =*/
    /*========================================================*/

    general: function() {
      $('[data-type="section-switch"], #menu-home li a, #banner-particales a, #banner-creative a, #banner-ripple a').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
          var target = $(this.hash);
          if (target.length > 0) {

            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
      /* Banner Static */
      if (typeof $.fn.ripples == 'function') {
        try {
          $('#banner-ripple').ripples({
            resolution: 500,
            perturbance: 0.04
          });
        } catch (e) {
          $('.error').show().text(e);
        }
      }
    },
  };
  GPTHEME.documentOnLoad = {
    init: function() {
      $(".preloader").fadeOut("slow");

    },
  };
  GPTHEME.documentOnResize = {
    init: function() {},
  };
  // Initialize Functions
  $(window).on('load', GPTHEME.documentOnLoad.init);
  $(window).on('resize', GPTHEME.documentOnResize.init);


})(jQuery);



/* Banner Static */
if (typeof $.fn.ripples == 'function') {
  try {
    $('#banner-ripple').ripples({
      resolution: 500,
      perturbance: 0.04
    });
  } catch (e) {
    $('.error').show().text(e);
  }
}
// Section Background Image
$('[data-bg-image]').each(function() {
  var img = $(this).data('bg-image');
  $(this).css({
    backgroundImage: 'url(' + img + ')',
  });
});

function queCounter(index) {
  const bottom_ques_counter = quiz_box.querySelector(".total_que");
  let totalQuesCountTag = '<span><p>' + index + '</p>of<p>' + questions.length + '</p>Questions</span>';
  bottom_ques_counter.innerHTML = totalQuesCountTag;
}