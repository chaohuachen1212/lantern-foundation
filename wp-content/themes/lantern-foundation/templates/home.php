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
          <h1>Lantern Foundation</h1>
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
              <p>Read about our work in Guangxi after its flash flood</p>
              <a class="btn" href="/guanxi-flash-flooddisaster-relief-family-visits/">Read More</a>
            </div>
            <div class="text-box">
              <p>Learn about our different campaigns and projects below!</p>
              <a class="btn" href="/our-projects/">Read More</a>
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
