<?php
  // Template Name: News & Update
  update_option('body_class', 'news-updates theme-magenta new-nav');
  get_header();
?>

  <section class="news-updates--main">
    <div class="container">
      <h1>News & Updates</h1>
      <p>Welcome to our newly-added News & Updates page! We hope to provide you with continuous updates of what we have been working on—our latest projects, recent events, new collaborations, and more. Read below to learn more!</p>

      <div class="rows-wrap">
        <a class="row" href="">
          <div class="img-wrap">
            <figure>
              <img src="<?php echo GET_URI ?>/img/news/News1.png" alt="Image">
            </figure>
          </div>
          <article>
            <span class="date">Aril 4, 2024 </span>
            <h2>A Year in Review – Lantern Foundation’s Achievements</h2>
            <p>Recap of Lantern Foundation’s partnerships and achievements from April 2023 to April 2024. While our external achievements such as our community events are very valuable to us, we also want to highlight the behind-the-scenes efforts and milestones that we have reached as a developing organization</p>
            <span class="btn">Read More</span>
          </article>
        </a>
        <a class="row" href="">
          <div class="img-wrap">
            <figure>
              <img src="<?php echo GET_URI ?>/img/news/News1.png" alt="Image">
            </figure>
          </div>
          <article>
            <span class="date">Aril 4, 2024 </span>
            <h2>A Year in Review – Lantern Foundation’s Achievements</h2>
            <p>Recap of Lantern Foundation’s partnerships and achievements from April 2023 to April 2024. While our external achievements such as our community events are very valuable to us, we also want to highlight the behind-the-scenes efforts and milestones that we have reached as a developing organization</p>
            <span class="btn">Read More</span>
          </article>
        </a>
        <a class="row" href="">
          <div class="img-wrap">
            <figure>
              <img src="<?php echo GET_URI ?>/img/news/News1.png" alt="Image">
            </figure>
          </div>
          <article>
            <span class="date">Aril 4, 2024 </span>
            <h2>A Year in Review – Lantern Foundation’s Achievements</h2>
            <p>Recap of Lantern Foundation’s partnerships and achievements from April 2023 to April 2024. While our external achievements such as our community events are very valuable to us, we also want to highlight the behind-the-scenes efforts and milestones that we have reached as a developing organization</p>
            <span class="btn">Read More</span>
          </article>
        </a>

      </div>
    </div>
  </section>

<?php
get_footer();
?>
