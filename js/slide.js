var slideContainer = document.getElementById('slide__container');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var slideProgress = document.getElementById('slide__progress');

var slideNames = ['SingleCare', 'MobiSave', 'LateShift', 'Thnks', 'BevRage']
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

  // for (var k = 0; k < slideNames[slideDotNumber].length; k++) {
  //   var slideLetter = slideNames[slideDotNumber][k];
  //   var slideLetters = document.createElement('li');
  //   slideLetters.innerHTML = slideLetter;
  //   slideLetters.setAttribute('class', 'slide__title__letter');
  //   slideLetters.style.color = '#fff';
  //   slideLetters.style.fontFamily = 'Arial, sans-serif';
  //   slideLetters.style.fontSize = '120px';
  //   slideLetters.style.fontWeight = 'bold';
  //   slideLetters.style.margin = '0 4px';
  //   slideLetters.style.textShadow = '0 0 32px rgba(0,0,0,.05)';
  //   slideLetters.style.textTransform = 'uppercase';
  //   slideLetters.style.transform = 'translate3d(0, 100%, 0)';
  //   slideLetters.style.transition = 'transform .8s';
  //   document.getElementsByClassName('slide__title')[slideDotNumber].appendChild(slideLetters);
  // }

  var slideLetters = document.createElement('li');
  slideLetters.innerHTML = slideNames[slideDotNumber];
  slideLetters.setAttribute('class', 'slide__title__letter');
  slideLetters.style.color = '#fff';
  slideLetters.style.fontFamily = 'Arial, sans-serif';
  slideLetters.style.fontSize = '160px';
  slideLetters.style.fontStyle = 'italic';
  slideLetters.style.fontWeight = 'bold';
  slideLetters.style.margin = '0 16px';
  slideLetters.style.opacity = '0';
  // slideLetters.style.textShadow = '0 0 24px rgba(0,0,0,.08)';
  slideLetters.style.textTransform = 'uppercase';
  slideLetters.style.transform = 'translate3d(0, 100%, 0)';
  slideLetters.style.transition = 'opacity 1.4s, transform 1s';
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

  for (var i = 0; i < slideNames.length; i++) {
    if (slideNumber == i) {
      document.getElementsByClassName('slide__title__letter')[i].style.transform = 'translate3d(0,0,0)';
      document.getElementsByClassName('slide__title__letter')[i].style.opacity = '1';
    } else {
      document.getElementsByClassName('slide__title__letter')[i].style.transform = 'translate3d(0,100%,0)';
      document.getElementsByClassName('slide__title__letter')[i].style.opacity = '0';
    }
  }

  // for (var i = 0; i < slideNames.length; i++) {
  //   if (slideNumber == i) {
  //     console.log(slideNames[i]);
  //     console.log(slideNames[i].length);
  //
  //     for (var j = 0; j < slideNames[i].length; j++) {
  //       console.log(document.getElementsByClassName('slide__title__letter')[j]);
  //       document.getElementsByClassName('slide__title__letter')[j].style.transform = 'translate3d(0,0,0)';
  //     }
  //   }
  // }
}
slideShift();

function slideJump(n) {
  slideNumber = n;
  console.log(slideNumber);
  slideShift();
}

for (var m = 0; m < slideNames.length; m++) {
  console.log(m);
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
