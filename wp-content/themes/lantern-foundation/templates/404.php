<?php
  // Template Name: 404
  update_option('body_class', 'page-error-404 theme-magenta');
  get_header();
?>

<section class="error-404">
  <img src="<?php echo GET_URI ?>/img/Group 1.png">
  <div class="container">
    <div class="content">
      <h1>404 - Sorry, we can't locate that page.</h1>
    </div>
  </div>
</section>

<?php get_footer(); ?>
