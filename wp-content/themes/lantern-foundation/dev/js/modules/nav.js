(function($) {

	var $hamburger = $('.hamburger'),
      $header = $('header'),
      $body = $('body'),
      $html = $('html'),
      $nav = $('.header-nav'),
      $subnavToggles = $('.mobile-subnav-toggle');


  $hamburger.on('click', function(){
    $(this).toggleClass('is-active');
    $header.toggleClass('is-active');
    $nav.toggleClass('is-active');
    $body.toggleClass('is-locked');
    $html.toggleClass('is-locked');
  });

  var navLinks = $('header nav a');

  var navBtn = $('header .btn-wrap .contact');

  navLinks.on('click', function(){
    $hamburger.removeClass('is-active');
    $header.removeClass('is-active');
    $nav.removeClass('is-active');
    $body.removeClass('is-locked');
    $html.removeClass('is-locked');
  });

  navBtn.on('click', function(){
    $hamburger.removeClass('is-active');
    $header.removeClass('is-active');
    $nav.removeClass('is-active');
    $body.removeClass('is-locked');
    $html.removeClass('is-locked');
  });


  $subnavToggles.on('click', function() {
    if ($(this).parent().hasClass('is-expanded')) {
      $(this).parent().removeClass('is-expanded');
    } else {
      $('.header-item.is-expanded').removeClass('is-expanded');
      $(this).parent().addClass('is-expanded');
    }
  });

  function detectNavBrowserURL() {
    var hashTag = window.location.pathname;
    var $targetElem = $('header nav li a');

    console.log(hashTag);
    $targetElem.each(function(){
      var $slef = $(this);
      var thisVal = $(this).attr('href');
      console.log(thisVal);

        if ( thisVal === hashTag ) {
          $slef.addClass('is-active');
        }
    });
  }
  detectNavBrowserURL();

}(jQuery));
