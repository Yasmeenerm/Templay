// keep track of slides
var homeSlides = $(".homeSlide");
var $slideContent = $(".hsContainer");
var slidesCount = $(homeSlides).length;
var activeSlide = 1;

// Build HTML for Nav
$("<div/>", {
    "id" : "slideNav"
}).append($("<ul>
<li class="slideNavPrev">
    <a class="disabled" href="#" title="Go to previous slide">
        <span class="ico ico-up">↑</span>
    </a>
</li>
<li>
    <span id="activeSlide">'+activeSlide+'</span>/<span id="maxSlides">'+slidesCount+'</span>
</li>
<li class="slideNavNext">
    <a href="#" title="Go to next slide">
        <span class="ico ico-down">↓</span>
    </a>
</li>
</ul>")).appendTo("body").delay(1200).fadeIn(duration);
