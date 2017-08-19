var slideContainer = document.getElementById('slide__container');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var slideProgress = document.getElementById('slide__progress');

var slideNames = ['SingleCare', 'MobiSave', 'LateShift', 'Thnks', 'BevRage']

var currentSlide = 0;
var progressFactor = 100 / slideNames.length;
var progressNumber = -100 + progressFactor;

for (var slideDotNumber = 0; slideDotNumber < slideNames.length; slideDotNumber++) {
  var slide = document.createElement('section');
  slide.setAttribute('class', 'slide');
  slide.setAttribute('id', slideNames[slideDotNumber]);
  document.getElementById('slide__container').appendChild(slide);

  var slideTitle = document.createElement('ul');
  slideTitle.setAttribute('class', 'slide__title');
  slideTitle.style.overflow = 'hidden';
  document.getElementsByClassName('slide')[slideDotNumber].appendChild(slideTitle);

  var slideLetters = document.createElement('li');
  slideLetters.innerHTML = slideNames[slideDotNumber];
  slideLetters.setAttribute('class', 'slide__title__letter');
  slideLetters.style.color = '#fff';
  slideLetters.style.fontFamily = 'Arial, sans-serif';
  slideLetters.style.fontSize = '120px';
  slideLetters.style.fontWeight = 'bold';
  slideLetters.style.margin = '0 16px';
  slideLetters.style.textShadow = '0 0 32px rgba(0,0,0,.05)';
  slideLetters.style.textTransform = 'uppercase';
  slideLetters.style.transform = 'translate3d(0, 100%, 0)';
  slideLetters.style.transition = 'transform .3s';
  document.getElementsByClassName('slide__title')[slideDotNumber].appendChild(slideLetters);

  var slideBtn = document.createElement('li');
  slideBtn.setAttribute('class', 'slide__btn');
  slideBtn.style.cursor = 'pointer';
  slideBtn.style.height = '16px';
  slideBtn.style.position = 'relative';
  slideBtn.style.transform = 'background-color .3s';
  slideBtn.style.width = 'calc(' + progressFactor + '% - 2px)';
  document.getElementById('slide__dots').appendChild(slideBtn);

  var slideBtnLabel = document.createElement('p');
  slideBtnLabel.setAttribute('class', 'slide__btn__label');
  slideBtnLabel.style.color = '#000';
  slideBtnLabel.style.fontFamily = 'Verdana, Helvetica, Arial, sans-serif';
  slideBtnLabel.style.fontSize = '12px';
  slideBtnLabel.style.fontWeight = 'normal';
  slideBtnLabel.style.letterSpacing = '.03em';
  slideBtnLabel.style.margin = '0';
  slideBtnLabel.style.position = 'absolute';
  slideBtnLabel.style.textAlign = 'center';
  slideBtnLabel.style.textTransform = 'uppercase';
  slideBtnLabel.style.top = '-24px';
  slideBtnLabel.style.width = '100%';
  document.getElementsByClassName('slide__btn')[slideDotNumber].appendChild(slideBtnLabel);
  document.getElementsByClassName('slide__btn__label')[slideDotNumber].innerHTML = slideNames[slideDotNumber];
}

function slideShift() {
  slideProgress.style.transform = 'translate3d(' + progressNumber + '%,0,0)';
  slideContainer.style.transform = 'translate3d(' + currentSlide + '%,0,0)';
}
slideShift();

arrowRight.addEventListener('click', function() {
  if (currentSlide <= (-(slideNames.length - 1) * 100)) {
    currentSlide -= -(slideNames.length - 1) * 100;
    progressNumber = -100 + progressFactor;
  } else {
    currentSlide -= 100;
    progressNumber = progressNumber + progressFactor
  }
  slideShift();

})

arrowLeft.addEventListener('click',function() {
  if (currentSlide >= 0) {
    currentSlide -= (slideNames.length - 1) * 100;
    progressNumber = 0;
  } else {
    currentSlide += 100;
    progressNumber = progressNumber - progressFactor;
  }
  slideShift();

})
