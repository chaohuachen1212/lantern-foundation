<?php
  // Template Name: News & Update
  update_option('body_class', 'news-updates theme-magenta new-nav');
  get_header();
?>

  <section class="news-updates--main">
    <div class="container">
      <h1><?php the_title(); ?></h1>
      <?php the_field('news_introduction'); ?>

      <div class="rows-wrap">
        <?php
        $options = array(
          'post_type' => 'post',
          'post_status' => 'publish',
          'posts_per_page' => -1,
        );
        $wp_query = new WP_Query( $options );
        while( $wp_query->have_posts() ) : $wp_query->the_post();

       ?>

        <a class="row" href="<?php the_permalink(); ?>">
          <div class="img-wrap">
            <figure>
              <img src="<?php the_post_thumbnail_url(); ?>" alt="Thumbnail">
            </figure>
          </div>
          <article>
            <span class="date"><?php echo get_the_date( 'M j, Y' ); ?></span>
            <h2><?php the_title(); ?></h2>
            <p><?php the_excerpt(); ?></p>
            <span class="btn">Read More</span>
          </article>
        </a>
        <?php
         endwhile;
         wp_reset_postdata();
         wp_reset_query();
        ?>

      </div>
    </div>
  </section>

<?php
get_footer();
?>
