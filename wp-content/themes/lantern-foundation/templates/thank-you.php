<?php
  // Template Name: Thank You
  update_option('body_class', 'page-thank-you theme-magenta');
  get_header();
?>

<section class="thank-you">
  <img src="<?php echo GET_URI ?>/img/Group 1.png">
  <div class="container">
      <div class="box-ty">
        <h1>THANK YOU</h1>
        <p>Thanks for your information, we will be in touch.</p>
        <a class="btn" href="/">HOME PAGE</a>
      </div>
  </div>
</section>

<?php
get_footer();
?>
