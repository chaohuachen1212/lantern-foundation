

    </div> <!-- End max-container -->

    <footer>
      <div class="container">
        <div class="row">

        </div>

        <div class="bottom-row">
          <img class="footer-logo" src="<?php echo GET_URI ?>/img/footer_LOGO.png">
        </div>
      </div>
    </footer>

    <script
      src="https://code.jquery.com/jquery-3.6.0.slim.min.js"
      integrity="sha256-u7e5khyithlIdTpu22PHhENmPcRdFiHRjhAuHcs05RI="
      crossorigin="anonymous"
    >
    </script>
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
