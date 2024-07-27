(function($) {


  function logoScrollerModule() {
    const marqueeWrap = document.querySelector(".marquee-slide-card-wrap");
    const marqueeCards = document.querySelectorAll(".marquee-slide-card");
    var totalCardsWidth = 0;  //we will add each card width together

    marqueeCards.forEach(function (card, index) {
        const cardWidth = 220 + 44; //width + margin (need to make this dyamic)
        totalCardsWidth = totalCardsWidth + cardWidth;
        return totalCardsWidth;
    });

    // $('.marquee-slide-card--second-set').css('display', 'flex');
  }


  // if ($(".logo-scroller--module").length) {
  //     logoScrollerModule();
  //
  //     $(window).on('resize', function() {
  //         logoScrollerModule();
  //     });
  // }

}(jQuery));
