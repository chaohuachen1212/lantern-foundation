<?php
  // Template Name: Index
  update_option('body_class', 'page-index theme-magenta');
  get_header();
?>
<h1>Home page</h1>

<section class="form--sec">
  <div class="container">
    <h2>Send Us Message</h2>
    <form class="contact-us--form">
      <div class="row">
        <div class="half">
          <input type="text" class="input-required" id="fname" name="entry.1865447532" placeholder="First Name">
        </div>
        <div class="half">
          <input type="text" id="lname" name="entry.646231686" placeholder="Last Name">
        </div>
      </div>
      <div class="row">
        <input type="email" name="entry.542059978" placeholder="Email">
      </div>

      <textarea id="w3review" name="entry.62305795" rows="4" cols="50" placeholder="Leave Your Message"></textarea>
      <input id="contact-us-submit" type="submit" value="Submit">
    </form>
  </div>
</section>
<?php
get_footer();
?>
