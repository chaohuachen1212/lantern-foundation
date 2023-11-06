<?php
  // Template Name: Style guide
  update_option('body_class', 'style-guide');
  get_header();
?>
<style>
.kni-styleguide {
  background: #fafafa;
  padding: 0;
  margin: 0;
  display: flex;
}
.kni-styleguide *,
.kni-styleguide *:before,
.kni-styleguide *:after {
  box-sizing: border-box;
}
.kni-styleguide aside {
  position: fixed;
  overflow-y: auto;
  background: #f5f5f5;
  height: 100vh;
  width: 200px;
  border-right: 1px solid #ddd;

}
.kni-styleguide aside nav {
  height: auto;
  padding-bottom: 30px;
}
.kni-styleguide aside ul {
  margin: 0;
  padding: 0;
}
.kni-styleguide aside a {
  text-decoration: none;
  font-size: 14px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
}
.kni-styleguide aside li li a {
  color: #777;
}
.kni-styleguide aside ul > li {
  border-bottom: 1px solid #ddd;
  padding-right: 10px;
  padding-top: 20px;
}
.kni-styleguide aside ul li li {
  padding-top: 0;
}
.kni-styleguide aside ul li li:first-child {
  padding-top: 10px;
}
.kni-styleguide aside ul li li:last-child {
  padding-bottom: 25px;
}
.kni-styleguide aside ul > li:last-of-type {
  padding-bottom: 10px;
}
.kni-styleguide aside li {
  margin: 0;
  padding: 0 0 0 25px;
  text-indent: 0;
  list-style-type: none;
}
.kni-styleguide aside li a {
  color: #000;
  display: block;
  padding: 5px 0;
}
.kni-styleguide aside li a:hover {
  color: #333;
}
.kni-styleguide aside li a.active {
  text-decoration: underline;
  color: #000;
}
.kni-styleguide aside ul li li {
  border: none;
}
.kni-styleguide main {
  margin-left: 200px;
  padding: 5%;
}
.kni-styleguide code {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 3px 6px;
  color: #fc1e54;
  display: inline-block;
}
.kni-styleguide main article {
  border-bottom: 1px solid #ddd;
  padding: 20px 0;
}
.kni-styleguide .message-box {
  background: #fffae8;
  border: 1px solid #f2d778;
  text-align: center;
  border-radius: 5px;
  padding: 20px 10px;
  margin-top: 40px;
}

.kni-styleguide #colors article {
  display: flex;
  flex-wrap: wrap;
}
.kni-styleguide #colors .color-card,
.kni-styleguide #colors .gradient-card {
  background: #fff;
  width: 100%;
  margin-right: 20px;
  margin-bottom: 20px;
  width: calc((100% / 4) - 20px);
}
.kni-styleguide #colors .color-card {
  border-top: 100px solid var(--brand-color);
}
.kni-styleguide #colors .gradient {
  background: var(--gradient);
  height: 100px;
}
.kni-styleguide #colors code {
  background: transparent;
  border: none;
  border-radius: 0;
  padding: 10px 10px 30px;
  color: black;
  display: inline-block;
}

/* html {
  scroll-behavior: smooth;
} */
</style>

<div class="kni-styleguide">

<aside>
    <nav id="sideNav">
      <ul>
        <li>
          <a href="#colors" class="navlink">Colors</a>
          <ul>
            <li><a class="navlink" href="#brand-colors">Brand colors</a></li>
            <li><a class="" href="#gradients">Gradients</a></li>
          </ul>
        </li>
        <li>
          <a class="navlink" href="#">Typography</a>
          <ul>
            <li><a class="navlink" href="#p">p</a></li>
            <li><a class="navlink" href="#p-large">p.large</a></li>
            <li><a class="navlink" href="#headings">Headings</a></li>
            <li><a class="navlink" href="#small">.small</a></li>
            <li><a href="#ol">Ordered list</a></li>
            <li><a href="#ul">Unordered list</a></li>
          </ul>
        </li>

        <li>
          <a href="#">Components</a>
          <ul>
            <li><a href="#btn">.btn</a></li>
            <li><a href="#btn-outline">.btn.outline</a></li>
            <li><a href="#btn-inverse">.btn.inverse</a></li>
            <li><a href="#card">.card</a></li>
          </ul>
        </li>

        <li>
          <a href="#">Forms</a>
          <ul>
            <li><a href="#input">input</a></li>
            <li><a href="#input-full">input.full</a></li>
            <li><a href="#textarea">textarea</a></li>
            <li><a href="#select">select</a></li>
            <li><a href="#radio">radio</a></li>
            <li><a href="#checkbox">checkbox</a></li>
          </ul>
        </li>

      </ul>
    </nav>
  </aside>
  <main>
    <section>
      <h1><?php echo get_bloginfo( 'name' ); ?> styles & components</h1>
      <p>Use this page to jumpstart page styling and build your styleguide in the process.</p>
      <br><br><br><br>
    </section>
    <section id="colors">
      <article id="brand-colors">
        <div class="color-card" style="--brand-color: #2DCFE5;"><code>$color-name</code></div>
        <div class="color-card" style="--brand-color: #3A3633;"><code>$color-name-2</code></div>

      </article>
      <article id="gradients">
        <div class="gradient-card" style="--gradient: linear-gradient(295.99deg, #60D8A8 2.84%, #98E050 100%);">
          <div class="gradient"></div>
          <code>$gradient-name</code>
        </div>
        <br><br><br><br>
      </article>
    </section>
    <section id="typography">
      <article id="p">
        <pre><code>p</code></pre>
        <p>Whether you live in an urban community or a remote location, SOURCE Hydropanels make, mineralize, and deliver high-quality drinking water to your tap. Starting from a standard 2-Hydropanel array, SOURCE is scaled to meet your drinking water needs.</p>
      </article>
      <article id="p-large">
        <pre><code>p.large</code></pre>
        <p>Whether you live in an urban community or a remote location, SOURCE Hydropanels make, mineralize, and deliver high-quality drinking water to your tap. Starting from a standard 2-Hydropanel array, SOURCE is scaled to meet your drinking water needs.</p>
      </article>
      <article id="headings">
        <pre><code>h1</code></pre>
        <h1>Meet the Hydropanel</h1>
      </article>
      <article id="h2">
        <pre><code>h2</code></pre>
        <h2>Perfect drinking water for your worksite
          sometimes this needs to be 2 lines</h2>
      </article>
      <article id="h3">
        <pre><code>h3</code></pre>
        <h3>Truly Healthy Water</h3>
      </article>
      <article id="h4">
        <pre><code>h4</code></pre>
        <h4>Perfect drinking water for your worksite</h4>
      </article>
      <article id="h5">
        <pre><code>h5</code></pre>
        <h5>Perfect drinking water for your worksite</h5>
      </article>
      <article id="h6">
        <pre><code>h6</code></pre>
        <h6>Perfect drinking water for your worksite</h6>
      </article>
      <article id="small">
        <pre><code>.small</code></pre>
        <h6>This text is small</h6>
      </article>

      <div class="message-box">** Add your own custom global text styles here <code>.caption</code>, <code>.small-quote</code>, etc **</div>
      <article id="ol">
        <pre><code>ol</code></pre>
        <ol>
          <li>First item</li>
          <li>Second item</li>
          <li>Third item</li>
          <li>Fourth item</li>
        </ol>
      </article>

      <article id="ul">
        <pre><code>ul</code></pre>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
          <li>Beer</li>
        </ul>
      </article>

    </section>
    <section id="components">
      <article id="btn">
        <pre><code>.btn</code></pre>
        <a href="#" class="btn">Click here</a>
      </article>

      <article id="btn-outline">
        <pre><code>.btn-outline</code></pre>
        <a href="#" class="btn outline">Outline button</a>
      </article>

      <article id="btn-inverse">
        <pre><code>.btn-inverse</code></pre>
        <a href="#" class="btn outline">Inverse button</a>
      </article>
      <article id="card">
        <pre><code>.card</code></pre>
        <div class="card"></div>
        <div class="card"></div>
      </article>
    </section>
    <section id="forms">
      <article id="input">
        <pre><code>input</code></pre>
        <input type="text">
      </article>
      <article id="input-full">
        <pre><code>.input-full</code></pre>
        <input type="text">
      </article>
      <article id="textarea">
        <pre><code>textarea</code></pre>
        <input type="text">
      </article>
      <article id="select">
        <pre><code>select</code></pre>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
      </article>
      <article id="radio">
        <pre><code>radio</code></pre>
        <div>
          <input type="radio" id="huey" name="drone" value="huey" checked>
          <label for="huey">Huey</label>
        </div>

        <div>
          <input type="radio" id="dewey" name="drone" value="dewey">
          <label for="dewey">Dewey</label>
        </div>

        <div>
          <input type="radio" id="louie" name="drone" value="louie">
          <label for="louie">Louie</label>
        </div>
      </article>
      <article id="checkbox">
        <pre><code>checkbox</code></pre>
        <div>
          <input type="checkbox" id="scales" name="scales" checked>
          <label for="scales">Scales</label>
        </div>

        <div>
          <input type="checkbox" id="horns" name="horns">
          <label for="horns">Horns</label>
        </div>

      </article>

    </section>
    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
  </main>

</div>

<script>

$("#sideNav a").on("click", function () {
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $("#sideNav a").removeClass("active");
    $(this).addClass("active");
  }
});
</script>
<?php get_footer(); ?>
