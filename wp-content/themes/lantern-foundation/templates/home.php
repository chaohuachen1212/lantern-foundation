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
          <h1><?php the_field('hero_title'); ?></h1>
          <?php the_field('hero_copy'); ?>
        </div>
        <div class="row">
          <div class="col video-wrap">

            <p class="text-center">Check out our recap video of our trip to Linxia, Gansu</p>
            <figure class="video-modal-trigger" data-video-url="https://www.youtube.com/embed/bMMCFwEKqCs?si=w7KizEcVAFjEbxF_" >
              <img class="video-img" src="<?php echo GET_URI ?>/img/home/hqdefault.jpg">
              <img class="pay-btn" src="<?php echo GET_URI ?>/img/home/play-bottom.png">
            </figure>

          </div>
          <div class="col">
            <?php
              if( have_rows('hero_text_boxs') ):
              while( have_rows('hero_text_boxs') ): the_row();
            ?>
              <div class="text-box">
                <p><?php the_sub_field('text'); ?></p>
                <?php 

                $link = get_sub_field('button');

                if( $link ): 
                  $link_url = $link['url'];
                  $link_title = $link['title'];
                  $link_target = $link['target'] ? $link['target'] : '_self';
                  ?>
                <a class="btn" href="<?php echo esc_url($link_url); ?>" target="<?php echo esc_attr($link_target); ?>"><?php echo esc_html($link_title); ?></a>
                <?php endif; ?>
              </div>
            <?php
              endwhile; endif;
            ?>
           
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
