/*

*** DOM Structure:

<div class="video-modal-trigger" data-video-url="https://www.youtube.com/embed/m2lyB_gzR84?rel=0&autoplay=1">
</div>

<section class="video-modal">
  <div class="video-container">
    <iframe width="1280" height="720" src="" frameborder="0" allowfullscreen></iframe>
  </div>
</section>

*/

(function($) {

  var triggerEle  = $('.video-modal-trigger');
  var modal       = $('.video-modal');
  var container   = modal.find('.video-container');
  var iframe      = modal.find('iframe');
  var closeBtn    = modal.find('.close-btn');
  var active      = "is-active";

  triggerEle.on('click', function(){

    var url = $(this).attr('data-video-url');
    modal.addClass(active);
    iframe.attr('src', url);
  });

  closeBtn.on('click', function(){
    modal.removeClass(active);
    iframe.attr('src', '');
  });

  container.on('click', function(e){
    e.stopPropagation();
  });


  modal.on('click', function(){
    modal.removeClass(active);
    iframe.attr('src', '');
  });


}(jQuery));
