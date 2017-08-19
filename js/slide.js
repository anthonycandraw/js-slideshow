var slideContainer = document.getElementById('slide__container');
var slide = document.querySelectorAll('.slide');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var slideProgress = document.getElementById('slide__progress');

var currentSlide = 0;
var progressFactor = 100 / slide.length;
var progressNumber = -100 + progressFactor;

function slideShift() {
  slideProgress.style.transform = 'translate3d(' + progressNumber + '%,0,0)';
}

slideShift();

arrowRight.addEventListener('click', function() {
  if (currentSlide <= (-(slide.length - 1) * 100)) {
    currentSlide -= -(slide.length - 1) * 100;
    progressNumber = -100 + progressFactor;
  } else {
    currentSlide -= 100;
    progressNumber = progressNumber + progressFactor
  }

  slideShift();
  slideContainer.style.transform = 'translate3d(' + currentSlide + '%,0,0)';

})

arrowLeft.addEventListener('click',function() {
  if (currentSlide >= 0) {
    currentSlide -= (slide.length - 1) * 100;
    progressNumber = 0;
  } else {
    currentSlide += 100;
    progressNumber = progressNumber - progressFactor;
  }
  slideShift();
  slideContainer.style.transform = 'translate3d(' + currentSlide + '%,0,0)';
})
