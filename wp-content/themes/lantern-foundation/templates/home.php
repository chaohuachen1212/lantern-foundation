<?php
  // Template Name: home page
  update_option('body_class', 'page-home theme-magenta');
  get_header();
?>
<h1>Home page</h1>




  <section class="form--sec">
    <div class="container">
      <h2>Send Us Message</h2>
      <form>
        <div class="row">
          <div class="half">
            <input type="text" class="input-required" id="fname" name="fname" placeholder="First Name">
          </div>
          <div class="half">
            <input type="text" id="lname" name="lname" placeholder="Last Name">
          </div>
        </div>
        <div class="row">
          <input type="email" name="email" placeholder="Email">
        </div>
        <div class="row">
          <input type="email" name="email" placeholder="Email">
        </div>
        <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="Leave Your Message">

        </textarea>
      </form>
    </div>
  </section>
<?php
get_footer();
?>
