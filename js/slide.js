var slideContainer = document.getElementById('slide__container');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var slideProgress = document.getElementById('slide__progress');

var slideNames = ['SingleCare', 'MobiSave', 'LateShift', 'Thnks', 'BevRage']
var slideNumber = 0;

console.log(slideNumber);

var slideProgressBar = document.createElement('div');
slideProgressBar.setAttribute('id', 'slideProgressBar');
slideProgressBar.style.backgroundColor = 'black';
slideProgressBar.style.bottom = '0';
slideProgressBar.style.height = '16px';
slideProgressBar.style.left = '0';
slideProgressBar.style.opacity = '.16';
slideProgressBar.style.position = 'absolute';
slideProgressBar.style.transition = 'opacity .3s, width .3s';
document.getElementById('slides__navigation').appendChild(slideProgressBar);

var slideDots = document.createElement('ul');
slideDots.setAttribute('id', 'slide__dots');
document.getElementById('slides__navigation').appendChild(slideDots);

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
  slideBtn.style.width = 'calc(' + (100 / slideNames.length) + '% - 2px)';
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
  slideProgressBar.style.width = 100 * ((slideNumber + 1) / slideNames.length) + '%';
  slideContainer.style.transform = 'translate3d(' + (-100 * (slideNumber)) + '%,0,0)';
}
slideShift();

arrowRight.addEventListener('click', function() {
  if (slideNumber >= slideNames.length - 1) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }
  slideShift();
})

arrowLeft.addEventListener('click',function() {
  if (slideNumber <= 0) {
    slideNumber = slideNames.length - 1;
  } else {
    slideNumber--;
  }
  slideShift();
})
