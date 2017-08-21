var slideContainer = document.getElementById('slide__container');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var slideProgress = document.getElementById('slide__progress');

var slideNames = ['SingleCare', 'MobiSave', 'LateShift', 'Thnks', 'BevRage'];
var slideColor = ['#fceede', '#FEE2F6', '#FEE25A', '#C5ECEA', '#c5ecd9'];
var slideNumber = 0;

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
  slide.style.backgroundColor = '#f0f0f0';
  slide.style.backgroundColor = slideColor[slideDotNumber];
  slide.style.position = 'relative';
  document.getElementById('slide__container').appendChild(slide);

  var slidePage = document.createElement('p');
  slidePage.setAttribute('id', 'slide__page');
  slidePage.style.left = '24px';
  slidePage.style.margin = '0';
  slidePage.style.top = '24px';
  slidePage.style.width = '180px';

  var slideTitle = document.createElement('ul');
  slideTitle.setAttribute('class', 'slide__title');
  slideTitle.style.overflow = 'hidden';
  document.getElementsByClassName('slide')[slideDotNumber].appendChild(slideTitle);

  for (var k = 0; k < slideNames[slideDotNumber].length; k++) {
    var slideLetter = slideNames[slideDotNumber][k];
    var slideLetters = document.createElement('li');
    slideLetters.innerHTML = slideLetter;
    slideLetters.setAttribute('class', 'slide__title__letter');
    slideLetters.style.color = '#fff';
    slideLetters.style.fontFamily = 'Arial, sans-serif';
    // slideLetters.style.fontSize = '128px';
    slideLetters.style.fontWeight = 'bold';
    // slideLetters.style.padding = '0 4px';
    slideLetters.style.opacity = '0';
    slideLetters.style.textTransform = 'uppercase';
    slideLetters.style.transform = 'translate3d(0, 100%, 0)';
    slideLetters.style.transition = 'opacity 1.4s, transform 1s';
    document.getElementsByClassName('slide__title')[slideDotNumber].appendChild(slideLetters);
  }

  var slideImage = document.createElement('div');
  slideImage.setAttribute('class', 'slide__image');
  slideImage.setAttribute('id', 'slide__image__' + slideNames[slideDotNumber].toLowerCase());
  slideImage.style.backgroundImage = 'url("images/slide__image__thnks.png")';
  slideImage.style.backgroundRepeat = 'no-repeat';
  slideImage.style.backgroundPosition = 'center';
  slideImage.style.backgroundSize = '100%';
  slideImage.style.bottom = '0';
  slideImage.style.left = '0';
  slideImage.style.margin = 'auto';
  slideImage.style.position = 'absolute';
  slideImage.style.right = '0';
  slideImage.style.top = '0';
  slideImage.style.transform = 'scale3d(.5,.5,.5) translate3d(40%,0,0)';
  slideImage.style.transition = 'transform .5s';
  document.getElementsByClassName('slide')[slideDotNumber].appendChild(slideImage);

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

function letterRaise(p, q) {
  var slide = document.getElementsByClassName('slide')[q];
  console.log('This is before: ' + p);

  if (p < slideNames[q].length) {
    setTimeout(function() {
      slide.getElementsByClassName('slide__title__letter')[p].style.transform = 'translate3d(0,0,0)';
      slide.getElementsByClassName('slide__title__letter')[p].style.opacity = '1';
      p++;

      letterRaise(p,q)

    }, 20);
  }
}

function slideShift() {
  slideProgressBar.style.width = 100 * ((slideNumber + 1) / slideNames.length) + '%';
  slideContainer.style.transform = 'translate3d(' + (-100 * (slideNumber)) + '%,0,0)';

  for (var i = 0; i < slideNames.length; i++) {
    var slide = document.getElementsByClassName('slide')[i];
    var slideImage = document.getElementsByClassName('slide__image')[i];
    var slideLetterCount = 0;


    if (slideNumber == i) {
      letterRaise(slideLetterCount, i);
      slideImage.style.transform = 'scale3d(1,1,1) translate3d(0,0,0)';
    } else {
      for (slideLetterCount = 0; slideLetterCount < slideNames[i].length; slideLetterCount++) {
        slide.getElementsByClassName('slide__title__letter')[slideLetterCount].style.transform = 'translate3d(0,100%,0)';
        slide.getElementsByClassName('slide__title__letter')[slideLetterCount].style.opacity = '0';
        slideImage.style.transform = 'scale3d(.5,.5,.5) translate3d(40%,0,0)';
      }
    }
  }
}
slideShift();

function slideJump(n) {
  slideNumber = n;
  slideShift();
}

for (var m = 0; m < slideNames.length; m++) {
  document.getElementsByClassName('slide__btn')[m].addEventListener('click', function(m) {
    return function() {
      slideJump(m);
    };
  }(m));
}


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
