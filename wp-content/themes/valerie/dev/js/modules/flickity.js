
// import Flickity from "flickity-fade";

(function($) {

	if ($('.home-hero--slides').length > 0) {

		$(document).ready(function() {

      function homeHeroSliderInit() {

        var $homeHeroSlider = $('.home-hero--slides').flickity({
          wrapAround: true,
          pageDots: false,
          draggable: false,
          prevNextButtons: false,
          autoPlay: 20000,
          pauseAutoPlayOnHover: false
        });

        homeHeroSliderArrow();

        function homeHeroSliderArrow() {
          var prevArrow = $('.home-hero--nav .home-hero--nav-item.prev');
          var nextArrow = $('.home-hero--nav .home-hero--nav-item.next');

          prevArrow.on( 'click', function() {
            console.log('prev');
            $homeHeroSlider.flickity('previous');
            $homeHeroSlider.flickity('stopPlayer');
          });

          nextArrow.on( 'click', function() {
            console.log('next');
            $homeHeroSlider.flickity('next');
            $homeHeroSlider.flickity('stopPlayer');
          });
        }
      }

      homeHeroSliderInit();

		});
	}

}(jQuery));
