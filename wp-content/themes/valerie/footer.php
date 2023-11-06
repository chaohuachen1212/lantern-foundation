

    </div> <!-- End max-container -->

    <footer role="contentinfo">
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
