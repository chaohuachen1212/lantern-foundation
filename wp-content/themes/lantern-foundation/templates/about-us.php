<?php
  // Template Name: About Us
  update_option('body_class', 'about-page theme-magenta new-nav');
  get_header();
?>

  <?php include GET_DIR . '/templates/modules/about-hero.php'; ?>
  <?php include GET_DIR . '/templates/modules/about-intro.php'; ?>
  <?php include GET_DIR . '/templates/modules/our-goals.php'; ?>
  <?php include GET_DIR . '/templates/modules/about-care.php'; ?>
  <?php include GET_DIR . '/templates/modules/our-impact.php'; ?>
  <?php include GET_DIR . '/templates/modules/about-feature.php'; ?>
  <?php include GET_DIR . '/templates/modules/contact-form.php'; ?>

<?php
  get_footer();
?>
