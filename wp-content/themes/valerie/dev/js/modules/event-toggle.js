// Switch between current, past and archived events
(function($) {

var display = function(block_name, title) {
  // Toogle Block
  $('.event-block').css('display', 'none');
  $('#' + block_name + '').css('display', 'block');

  // Change Title Color
  $('.events-nav-link').removeClass('is-active');
  $(title).addClass('is-active');
}

$('#current-events-link').on('click', function() {
  display('current-event-list', $(this));
});

$('#past-events-link').on('click', function() {
  display('past-event-list', $(this));
});

$('#archived-events-link').on('click', function() {
  display('archived-event-list', $(this));
});

}(jQuery));
