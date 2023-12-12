<?php
  // Template Name: Index
  update_option('body_class', 'page-index theme-magenta');
  get_header();
?>
<section class="home-hero">
  <img src="<?php echo GET_URI ?>/img/HeroBG.png">
  <div class="container">
    <article>
      <h1>Help bring light and hope into the lives of children in poverty</h1>
      <p>Almost 100 million children experience poverty in China. We must do all that we can to change that and make an impact on these children’s lives.
      </p>
    </article>


  </div>
</section>

<section class="about-us" id="about-us">
  <div class="container">
    <h2>About Us</h2>
    <div class="row">
      <div class="col">
        <h3>Introduction</h3>
        <p>Established early 2023, Lantern Foundation is a nonprofit organization that is dedicated to bettering the lives of children in China who are in poverty. Through donations, events, and campaigns, we want to spark awareness, create an impact, and be a part of the solution for child poverty. Since we have launched our foundation, we have received over $5000 in donations. We hope to continue making a positive impact with your donations.</p>
      </div>
      <div class="col right">
        <div id="box1"></div>
        <div id="box2"></div>
        <img class="img1" src="<?php echo GET_URI ?>/img/About_smilegirl.jpg">
      </div>
      <div class="row">
      <div class="col">
        <div id="box"></div>
          <img class="img2" src="<?php echo GET_URI ?>/img/About_3kids.jpg">
      </div>
      <div class="col right-col">
        <h3>Why You Should Care</h3>
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
      <h2>Meet Our Founder</h2>
      <p>Valerie is currently a junior at the Harker School. Besides her passion for helping improve the lives of kids in poverty, her main interests are community service, human rights, and law and political advocacy. At school, she is the vice president of Key Club, an international community service organization, and president of Amnesty Club, the largest grassroots human rights organization. She is also a part of her school’s debate team and often competes in national tournaments. Outside of school, she works on projects related to environmental justice and AAPI hate crime prevention. In her free time, she enjoys traveling to new places, hiking and exploring, and spending time with her family.</p>
      <img src="<?php echo GET_URI ?>/img/valerieli.jpg">
      <p class="contact">Contact me @ <a href="mailto:valerieli2023@gmail.com">valerieli2023@gmail.com</a></p>
    </div>
  </div>
</section>

<section class="our projects" id="our projects">
  <div class="container">
    <h2>Our Projects</h2>
    <h3>Lantern Foundation hosts different projects and campaigns throughout the year.
  Learn more about our ongoing campaigns and/or upcoming events below!</h3>
    <div class="row">
      <div class="col">
        <img class="img3" src="<?php echo GET_URI ?>/img/Img 1.1.png">
        <h3>Campaign 1</h3>
        <h4>Healing Smiles, Changing Lives</h4>
        <p>Supporting children in need of cleft palate surgeries and giving them a reason to smile</p>
        <p>In impoverished communities where medical resources are scarce, many children face the daily challenges of living with a cleft palate, hindering their ability to eat, speak, and smile with confidence. Lantern Foundation has partnered with Beijing Smile Angel Children’s Hospital, the first charity hospital in China, to provide cleft palate surgeries to children whose families can not afford to pay for them. Through these efforts, we hope that these children can have the simple joys of experiencing a healthy, happy childhood.</p>
      </div>
      <div class="colright">
        <img class="img4" src="<?php echo GET_URI ?>/img/Img 1.2 1.3-2.png">
      </div>
    </div>
  </div>
</section>


<section class="donate--sec" id="donate">
  <div class="container">
    <div class="inner-wrap">
      <h2>Donate</h2>
      <img src="<?php echo GET_URI ?>/img/donate-img.jpg">
      <h3>Through your donation, we can make a difference in the lives of children around the world. Donations of any amount is greatly appreciated and is guaranteed to go towards one of our campaigns and projects.</h3>
      <div class="btn-wrap">
        <a class="btn" target="_blank" href="https://square.link/u/hOHmgOj0">Donate to Lantern Foundation</a>
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


<section class="form--sec" id="contact">
  <div class="container">
    <h2>Send Us a Message</h2>
    <form class="contact-us--form">
      <div class="row">
        <div class="half">
          <input type="text" class="input-required" id="fname" name="entry.1865447532" placeholder="First Name">
        </div>
        <div class="half">
          <input type="text" class="input-required" id="lname" name="entry.646231686" placeholder="Last Name">
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
