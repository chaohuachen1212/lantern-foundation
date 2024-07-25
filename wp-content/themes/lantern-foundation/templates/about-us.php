<?php
  // Template Name: About Us
  update_option('body_class', 'about-page theme-magenta sticky-nav');
  get_header();
?>

<section class="about--hero">
  <img class="hero-bg" src="<?php the_field('hero_background'); ?>">
  <div class="container">
    <article>
      <h1><?php the_field('hero_title'); ?></h1>
    </article>
  </div>
  <a class="arrow-down" href="/about-us/#introduction">
    <svg width="28" height="16" viewBox="0 0 28 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0.292891 7.29289C-0.0976333 7.68342 -0.0976334 8.31658 0.29289 8.7071L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34314C8.46159 1.95262 8.46159 1.31945 8.07107 0.92893C7.68054 0.538406 7.04738 0.538406 6.65685 0.92893L0.292891 7.29289ZM28 7L0.999998 7L0.999998 9L28 9L28 7Z" fill="white"></path>
    </svg>
  </a>
</section>
  <?php include GET_DIR . '/templates/modules/about-intro.php'; ?>
  <?php include GET_DIR . '/templates/modules/our-goals.php'; ?>
  <?php include GET_DIR . '/templates/modules/about-care.php'; ?>
  <?php include GET_DIR . '/templates/modules/our-impact.php'; ?>
  <?php include GET_DIR . '/templates/modules/about-founder.php'; ?>
  <?php include GET_DIR . '/templates/modules/our-partner.php'; ?>
  <?php include GET_DIR . '/templates/modules/feature-three-images.php'; ?>
  <?php include GET_DIR . '/templates/modules/contact-form.php'; ?>

<?php
  get_footer();
?>
