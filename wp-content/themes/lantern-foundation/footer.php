

    </div> <!-- End max-container -->
      <!-- Video Modal -->
    <section class="video-modal" role="dialog" tabindex="0">
      <article class="video-modal-wrap">
        <iframe class="video-iframe" width="420" height="315" src="" frameborder="0" allowfullscreen>
        </iframe>
      </article>
      <div class="video-modal-close" tabindex="0" role="button">
        <?php include 'inc/vectors/close.svg'; ?>
      </div>
    </section>

    <footer>

      <div class="container">
        <div class="row">
          <div class="col-l">
            <a href="/">
              <img class="footer-logo" src="<?php echo GET_URI ?>/img/logo-white.png">
            </a>
            <h2>Lantern Foundation</h2>
            <div class="copy-wrap">
              <p>Lantern Foundation is an established 501(c)(4) nonprofit organization dedicated to bettering the lives of underserved kids in rural China.</p>
            </div>

          </div>

        <div class="col-r">

          <div class="footer-nav">
            <div class="col">
              <a href="/about-us/">About us</a>
              <a href="/our-projects">Our Projects</a>
              <a href="/news-updates/">News & Updates</a>
              <a href="/volunteer/">Volunteer</a>
              <a target="_blank" href="https://square.link/u/hOHmgOj0">Donate</a>
            </div>

            <div class="col">
              <h3>Contact</h3>
              <p>Email:</p>
              <p>lanternfoundation2023@gmail.com</p>
              <p>Instagram:</p>
              <p>@lanternfoundationus</p>
            </div>
          </div>

        </div>

        </div>
      </div>
    </footer>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>

    <?php wp_footer(); ?>

    <script id="__bs_script__">//<![CDATA[
      (function() {
        try {
          var script = document.createElement('script');
          if ('async') {
            script.async = true;
          }
          script.src = 'http://HOST:1111/browser-sync/browser-sync-client.js?v=2.29.3'.replace("HOST", location.hostname);
          if (document.body) {
            document.body.appendChild(script);
          } else if (document.head) {
            document.head.appendChild(script);
          }
        } catch (e) {
          console.error("Browsersync: could not append script tag", e);
        }
      })()
    //]]></script>
  </body>
</html>
