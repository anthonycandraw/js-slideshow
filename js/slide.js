var slideContainer = document.getElementById('slide-container');
var slide = document.querySelectorAll('.slide');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');

currentSlide = 0;

console.log(slide.length);

arrowRight.addEventListener('click', function() {
  if (currentSlide <= (-(slide.length - 1) * 100)) {
    currentSlide -= -(slide.length - 1) * 100;
  } else {
    currentSlide -= 100;
  }

  slideContainer.style.transform = 'translate3d(' + currentSlide + '%,0,0)';

  console.log(currentSlide);
})

arrowLeft.addEventListener('click',function() {
  if (currentSlide >= 0) {
    currentSlide -= (slide.length - 1) * 100;
  } else {
    currentSlide += 100;
  }

  slideContainer.style.transform = 'translate3d(' + currentSlide + '%,0,0)';

  console.log(currentSlide);
})
