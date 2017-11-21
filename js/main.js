// keep track of slides
// var homeSlides = $(".homeSlide");
// var $slideContent = $(".hsContainer");
// var slidesCount = $(homeSlides).length;
// var activeSlide = 1;
//
(function(){
  var ua = navigator.userAgent,
    isMobileWebkit = /WebKit/.test(ua) && /Mobile/.test(ua);

  if (isMobileWebkit) {
    $('html').addClass('mobile');
  }

  $(function(){
    var iScrollInstance;

    if (isMobileWebkit) {
      iScrollInstance = new iScroll('wrapper');

      $('#scroller').stellar({
        scrollProperty: 'transform',
        positionProperty: 'transform',
        horizontalScrolling: false,
        verticalOffset: 150
      });
    } else {
      $.stellar({
        horizontalScrolling: false,
        verticalOffset: 150
      });
    }
  });

})();

$(function(){
  $.stellar({
    horizontalScrolling: false,
    verticalOffset: 150
  });
});
// Slideshow
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
