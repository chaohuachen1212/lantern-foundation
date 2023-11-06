import { getUrlParameter } from '../helpers/dom'

(function($){

  if ($('body').hasClass('image-gallery')) {
    var $grid = $('.image-gallery-grid');
    var $select = $('.image-gallery-select');
    var $content = $('.image-lightbox-content-container');
    var imageParam = getUrlParameter().image;

    var $gallerySlider = $('.lightbox-slider').flickity({
      draggable: false,
      pageDots: false,
      wrapAround: true,
      prevNextButtons: false,
      setGallerySize: false,
      fullscreen: true,
      contains: true,
      resize: false,
    });

    function galleryLightbox(e) {
      $('#lightbox').addClass('is-active');
      $('body.image-gallery').css('overflow', 'hidden');
      $('#galleryLightbox .image-lightbox-content .image-info').css('padding', '0');
    }

    function updateUrl(param) {
      var urlParam = ''

      if (param) {
        urlParam = `?image=${param}`
      }

      var newurl = `${window.location.protocol}//${window.location.host + window.location.pathname + urlParam}`
      window.history.pushState({ path: newurl }, '', newurl)
    }

    if (imageParam) {
      galleryLightbox();
      var $imageElem = $(`[data-title=${imageParam}]`);

      if ($imageElem) {
        $gallerySlider.flickity( 'selectCell', $imageElem.index() );
      }
    }

    $('.image-gallery-select').on('click', function() {
      var index = $(this).index();

      galleryLightbox();
      $gallerySlider.flickity( 'selectCell', index );
      var imgTitle = $(this).data('title');
      updateUrl(imgTitle);
    });

    window.onpopstate = function(event) {
      if (event.state) {
        galleryLightbox();
        var image = event.state.path.split('?image=')[1];
        var index = $(`[data-title=${image}]`).index();
        $gallerySlider.flickity( 'selectCell', index );
      } else {
        $('#lightbox').removeClass('is-active');
        $('body.image-gallery').css('overflow', 'auto');
        $('#galleryLightbox .image-lightbox-content .image-info').css('padding', 'inherit');
      }
    };

    // previous
    $('.button--previous').on( 'click', function() {
      $gallerySlider.flickity('previous');
      var index = $gallerySlider.data('flickity').selectedIndex;
      var imgTitle = $select.eq(index).data('title');
      updateUrl(imgTitle);
    });

    // next
    $('.button--next').on( 'click', function() {
      $gallerySlider.flickity('next');
      var index = $gallerySlider.data('flickity').selectedIndex;
      var imgTitle = $select.eq(index).data('title');
      updateUrl(imgTitle);
    });

    $('body').on('click', '#lightboxClose', function(){
      $('#lightbox').removeClass('is-active');
      $('body.image-gallery').css('overflow', 'auto');
      $('#galleryLightbox .image-lightbox-content .image-info').css('padding', 'inherit');
      updateUrl();
    }); // click, #lightbox

  } // (body).hasClass

}(jQuery));
