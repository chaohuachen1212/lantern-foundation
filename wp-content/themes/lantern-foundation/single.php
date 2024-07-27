<?php
  // Template Name: News Detail
  get_header();
  if (have_posts()):
  while (have_posts()) : the_post();

  update_option('body_class', 'news-detail new-nav');
?>

  <section class="news-detail--main">
    <div class="container">
      <div class="news-detail-max-width">
        <a class="back-link" href="/news">
          <span class="arrow"> < </span>News & Updates
        </a>

        <h1><?php the_title(); ?></h1>
        <div class="author-info">
          <p class="author"><?php the_author() ?></p>
          <p class="time"><?php echo esc_html(get_the_date( 'M j, Y' )); ?></p>
        </div>

        <?php if (get_the_post_thumbnail_url()): ?>
        <figure class="hero-img">
          <img src="<?php the_post_thumbnail_url(); ?>" alt="Thumbnail">
        </figure>
       <?php endif; ?>

         <div class="main-content-wrap">
           <?php the_content() ?>
         </div>

         <div class="relatived-news-sec">
           <h2>Keep Reading</h2>
           <div class="cards-wrap">
             <?php
              $post_id = get_the_ID();

              $options = array(
                'post_type'      => 'post',
                'orderby' => 'rand',
                'post__not_in'   => array($post_id),
                'posts_per_page' => 3
              );

              $wp_query = new WP_Query($options);
              $count = 0;
              while ($wp_query->have_posts()) : $wp_query->the_post();
            ?>
             <a class="card" href="<?php the_permalink(); ?>">
               <figure>
                 <img class="video-img" src="<?php the_post_thumbnail_url(); ?>">
               </figure>
               <article>
                 <h3><?php the_title(); ?></h3>
                 <span class="btn">Read More</span>
               </article>
             </a>
             <?php
              endwhile; wp_reset_query();
            ?>

           </div>
         </div>
       </div>
    </div>
  </section>


<?php
  endwhile; endif;
  get_footer();
?>
