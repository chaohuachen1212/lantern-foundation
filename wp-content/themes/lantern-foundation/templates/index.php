<?php
  // Template Name: Index
  update_option('body_class', 'page-index theme-magenta');
  get_header();
?>

<section class="about-us" id="about-us">
  <div class="container">
    <h2>About Us</h2>
    <div class="row">
      <div class="col">
        <h3>Introduction</h3>
        <p>Established early 2023, Lantern Foundation is a nonprofit organization that is dedicated to bettering the lives of children in China who are in poverty. Through donations, events, and campaigns, we want to spark awareness, create an impact, and be a part of the solution for child poverty. Since we have launched our foundation, we have received over $5000 in donations. We hope to continue making a positive impact with your donations.</p>
      </div>
      <div class="col">
        <img src="<?php echo GET_URI ?>/img/About_smilegirl.png">
      </div>
      <div class="row">
      <div class="col">
        <div id="box"></div>
          <img src="<?php echo GET_URI ?>/img/About_3kids.jpg">
      </div>
      <div class="col">
        <h3>Important Statistics</h3>
        <p>
          <li>Almost 100 million children experience poverty in China</li>
          <li>Estimated 2 million children do not have any access to education</li>
          <li>Approximately two million children in China live in rural areas.</li>
        </p>
      </div>
    </div>
  </section>

<section class="meet-out-founders" id="meet-our-founders">
  <div class="container">
    <div class="inner-wrap">
      <h2>Meet Our Founders</h2>
      <p>Hi! My name is Valerie Li. Besides my work helping improve the lives of kids in poverty, my main passions are 0community service, human rights, and law and political advocacy. At school, I am the vice president of Key Club, an international community service organization, and president of the Amnesty Club, the largest grassroots human rights organization. I am also a part of my school’s debate team and travel every few weekends to compete in national tournaments. Outside of school, I work on projects related to environmental justice and AAPI hate crime prevention. In my free time, I enjoy traveling to new places, hiking and exploring, and spending time with my family.</p>

      <p>My goal for Lantern Foundation is to expand our impact beyond just helping children who experience poverty in China but rather to children all around the world. I hope that my work can help improve the lives of children in many aspects, whether that be providing them with education, allowing them to receive medical care, or creating a joyful childhood that they can reflect positively upon. Put simply, I hope that this organization can help make a difference in the life of a child.</p>
      <img src="<?php echo GET_URI ?>/img/valerieli.jpg">
      <p class="contact">Contact me @ <a href="mailto:valerieli2023@gmail.com">valerieli2023@gmail.com</a></p>
    </div>
  </div>
</section>


<section class="donate--sec" id="donate">
  <div class="container">
    <div class="inner-wrap">
      <h2>Ways to Give</h2>
      <img src="<?php echo GET_URI ?>/img/ways-to-give.jpg">
      <h3>Through your donation, we can make a difference in the lives of children around the world. Donations of any amount is greatly appreciated and is guaranteed to go towards one of our campaigns and projects.</h3>
      <div class="btn-wrap">
        <a class="btn" href="https://square.link/u/hOHmgOj0">Donate to Lantern Foundation</a>
      </div>
      <div class="row">
        <div class="col">
          <h3>Other Ways to Donate</h3>
          <div class="box">
            <p>Mail Your Donation:</p>
            <p>3986 Summit Road, Dublin CA</p>
          </div>
        </div>
        <div class="col">
          <h3>Questions about Donation</h3>
          <div class="box">
            <p>Contact us at:</p>
            <p><a href="mailto:lanternfoundation2023@gmail.com">lanternfoundation2023@gmail.com</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


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
