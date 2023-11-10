(function($) {

	var $hamburger = $('.hamburger'),
      $header = $('header'),
      $body = $('body'),
      $html = $('html'),
      $nav = $('.header-nav'),
      $subnavToggles = $('.mobile-subnav-toggle'),
      $eyebrow = $('.eyebrow'),
      $eyebrowClose = $('.eyebrow-close');

  $hamburger.on('click', function(){
    $(this).toggleClass('is-active');
    $header.toggleClass('is-active');
    $nav.toggleClass('is-active');
    $body.toggleClass('is-locked');
    $html.toggleClass('is-locked');
  });

  $eyebrowClose.on('click', function() {
    $eyebrow.removeClass('is-active');
    sessionStorage.setItem('eyebrow', 'hide');
  });

  $subnavToggles.on('click', function() {
    if ($(this).parent().hasClass('is-expanded')) {
      $(this).parent().removeClass('is-expanded');
    } else {
      $('.header-item.is-expanded').removeClass('is-expanded');
      $(this).parent().addClass('is-expanded');
    }
  });

  if (!sessionStorage.getItem('eyebrow')) {
    $eyebrow.addClass('is-active');
  }

}(jQuery));
