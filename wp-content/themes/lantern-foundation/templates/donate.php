<?php
  // Template Name: donate
  update_option('body_class', 'donate theme-magenta new-nav');
  get_header();
?>


<section class="donate--sec" id="donate">
  <div class="container">
    <div class="inner-wrap">
      <h2>Donate</h2>
      <img src="<?php echo GET_URI ?>/img/donate-img.jpg">
      <h3>Through your donation, we can make a difference in the lives of children around the world. Donations of any amount are greatly appreciated and are guaranteed to go towards one of our campaigns and projects. Thank you for your continued support!</h3>
      <div class="btn-wrap">
        <a class="btn" target="_blank" href="https://square.link/u/hOHmgOj0">Donate to Lantern Foundation</a>
      </div>
      <div class="row">
        <div class="col">
          <h3>Other Ways to Donate</h3>
          <div class="box">
            <p>Mail Your Donation:</p>
            <p>3962 Summit Road, Dublin CA 94568</p>
          </div>
        </div>
        <div class="col">
          <h3>Questions about Donation</h3>
          <div class="box">
            <p>Contact us at:</p>
            <p><a href="mailto:lanternfoundation2023@gmail.com">lanternfoundation2023@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>






<?php
  get_footer();
?>
