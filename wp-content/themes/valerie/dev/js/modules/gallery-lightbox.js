(function($){

  if ($('body').hasClass('image-contest')) {

    $(document).ready(function(){

      function gallerySliderInit() {

        var $gallerySlider = $('.image-contest-sliderbody').flickity({
          draggable: true,
          pageDots: false,
          groupCells: true
        });
      }

      function galleryLightbox(e) {
        e.preventDefault();


        $('#lightbox').css('display', 'block');


        var image_href = $(this).attr('data-target'); // .image-gallery-toggle data-target
        var sliderCellID = image_href.replace('#', ''); // id of corresponding slider cell

        // get the ID's of all slider cells and return them as an array
        // to check against the href of corresponding clicked gallery tile
        var cellMap = $('.image-contest-slider-tile').map(function(){
          return this.id;
        }).get().join().split(',');

        var cellIndex = $(cellMap).eq($(image_href).index()); // only grab one array item at a time from the cellMap
        
        console.log(cellIndex[0]); // tell me the ID of what I just clicked on

        // $(`.image-contest-slider-tile #${cellIndex[0]}`).addClass('is-selected'); // add is-selected to the corresponding slider tile

        // init the slider on lightbox activate
        if ($('.image-contest-sliderbody').length > 0 ) {
          gallerySliderInit();
        }

      }

      $('.image-gallery-toggle').each(function(){
        $(this).on('click', galleryLightbox);
      }); // init lightbox on each individual click

      $('body').on('click', '#lightboxClose', function(){
        $('#lightbox').css('display', 'none');
      }); // click, #lightbox

    }); // document.ready

  } // (body).hasClass

}(jQuery));
