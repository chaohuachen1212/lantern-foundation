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

        <figure class="hero-img <?php if($hero['turn_off_featured_image']): echo 'hidden-featured'; endif; ?>">
          <img src="<?php the_post_thumbnail_url(); ?>" alt="Thumbnail">
         </figure>

         <div class="main-content-wrap">
           <?php the_content() ?>
         </div>

         <div class="relatived-news-sec">
           <h2>Kepp Reading</h2>
           <div class="cards-wrap">
             <a class="card" href="">
               <figure>
                 <img class="video-img" src="<?php echo GET_URI ?>/img/news/News-3.jpg">
               </figure>
               <article>
                 <h3>Guanxi Flash Flood: Disaster Relief & Family Visits</h3>
                 <span class="btn">Read More</span>
               </article>
             </a>
             <a class="card" href="">
               <figure>
                 <img class="video-img" src="<?php echo GET_URI ?>/img/news/News-3.jpg">
               </figure>
               <article>
                 <h3>Guanxi Flash Flood: Disaster Relief & Family Visits</h3>
                 <span class="btn">Read More</span>
               </article>
             </a>
             <a class="card" href="">
               <figure>
                 <img class="video-img" src="<?php echo GET_URI ?>/img/news/News-3.jpg">
               </figure>
               <article>
                 <h3>Guanxi Flash Flood: Disaster Relief & Family Visits</h3>
                 <span class="btn">Read More</span>
               </article>
             </a>

           </div>
         </div>
       </div>
    </div>
  </section>


<?php
  endwhile; endif;
  get_footer();
?>
