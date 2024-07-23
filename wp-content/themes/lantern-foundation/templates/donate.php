<?php
  // Template Name: donate
  update_option('body_class', 'donate theme-magenta new-nav');
  get_header();
?>


<section class="donate--sec" id="donate">
  <div class="container">
    <div class="inner-wrap">
      <h1>Donate</h1>
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

<div class="group--images--wrap">
  <div class="container">
    <div class="max-w-864">
      <section class="group--images">
        <div class="two-img">
          <img src="<?php echo GET_URI ?>/img/donate/picture1.jpg">
          <img src="<?php echo GET_URI ?>/img/donate/picture2.jpg">
        </div>

        <div class="large-img">
          <img src="<?php echo GET_URI ?>/img/donate/picture3.jpg">
        </div>
      </section>


      <section class="group--images2">
        <div class="boy">
          <img src="<?php echo GET_URI ?>/img/donate/picture4.jpg">
        </div>
        <div class="girl">
          <img src="<?php echo GET_URI ?>/img/donate/picture5.jpg">
          <img src="<?php echo GET_URI ?>/img/donate/picture6.jpg">
        </div>
      </section>
    </div>
  </div>
</div>

<?php
  get_footer();
?>
