<?php
  // Template Name: home page
  update_option('body_class', 'page-home theme-magenta sticky-nav');
  get_header();
?>

<section class="home--hero">
  <figure class="hero-video-wrap">
    <video class="video" role="presentation" autoplay muted loop>
      <source id="video" src="<?php echo GET_URI ?>/videos/home-hero-bg.mp4" type="video/mp4">
    </video>

    <img class="mobile-img" src="<?php echo GET_URI ?>/img/home/hero-mobile.png">
  </figure>
  <div class="container">
    <div class="hero-content">
      <aticle>
        <div class="top-wrap">
          <h1>Lantern Foundation for Children</h1>
          <p>More than 70% of China’s 367 million children live in rural areas. They face countless health and educational barriers because of their remote, underresourced areas. We strive to make a difference through medical care and education in these kids' lives.</p>
        </div>
        <div class="row">
          <div class="col video-wrap">

            <p class="text-center">Check out our recap video of our trip to Linxia, Gansu</p>
            <figure class="video-modal-trigger" data-video-url="https://www.youtube.com/embed/rkOCRmAcYEs?si=KDV7T__h135sEw5S" >
              <img class="video-img" src="<?php echo GET_URI ?>/img/home/hero-video-img.png">
              <img class="pay-btn" src="<?php echo GET_URI ?>/img/home/play-bottom.png">
            </figure>

          </div>
          <div class="col">
            <div class="text-box">
              <p>Attend our 2025 Youth Benefit Concert!</p>
              <a class="btn" href="https://lanternfoundationus.org/save-the-date-lanterns-2025-benefit-concert/">Click Here</a>
            </div>
            <div class="text-box">
              <p>Read about our work in China this summer!</p>
              <a class="btn" href="https://lanternfoundationus.org/lighting-the-way-our-summer-2025-in-china/">Read More</a>
            </div>
          </div>
        </div>

    </article>
    </div>
  </div>
</section>


  <?php include GET_DIR . '/templates/modules/contact-form.php'; ?>
<?php
get_footer();
?>
