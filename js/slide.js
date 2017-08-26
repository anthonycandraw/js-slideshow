var slideContainer = document.getElementById('slide__container');
var arrowRight = document.getElementById('arrow-right');
var arrowLeft = document.getElementById('arrow-left');
var slideProgress = document.getElementById('slide__progress');
var slideNumber = 0;

var studies = {
  'singlecare': {
    name: 'SingleCare',
    color: '#00baf2;',
    pastel: '#fceede',
    tagline: 'We\'re making healthcare affordable.',
    image: 'url("images/slide__image__thnks.png")'
  },
  'mobisave': {
    name: 'MobiSave',
    color: '#8f2bfa',
    pastel: '#fee2f6',
    tagline: 'Save big. Anywhere.',
    image: 'url("images/slide__image__thnks.png")'
  },
  'lateshift': {
    name: 'LateShift',
    color: '#8f2bfa',
    pastel: '#fee25a',
    tagline: 'It\'s payback time',
    image: 'url("images/slide__image__thnks.png")'
  },
  'thnks': {
    name: 'Thnks',
    color: '#58e2c2',
    pastel: '#c5ecea',
    tagline: 'Always Say Thnks',
    image: 'url("images/slide__image__thnks.png")'
  },
  'bevrage': {
    name: 'BevRage',
    color: '#8f2bfa',
    pastel: '#c5ecd9',
    tagline: 'Something',
    image: 'url("images/slide__image__thnks.png")'
  }
};

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

for (var key in studies) {
  var slide = document.createElement('section');
  slide.setAttribute('class', 'slide');
  slide.setAttribute('id', studies[key].name.toLowerCase());
  slide.style.backgroundColor = '#f0f0f0';
  slide.style.backgroundColor = studies[key].pastel;
  slide.style.position = 'relative';
  document.getElementById('slide__container').appendChild(slide);

  var slideTitle = document.createElement('ul');
  slideTitle.setAttribute('class', 'slide__title');
  slideTitle.style.overflow = 'hidden';
  document.getElementsByClassName('slide')[key].appendChild(slideTitle);

  for (var k = 0; k < studies[key].name.length; k++) {
    var slideLetter = studies[key].name[k];
    var slideLetters = document.createElement('li');
    slideLetters.innerHTML = slideLetter;
    slideLetters.setAttribute('class', 'slide__title__letter');
    slideLetters.style.color = '#fff';
    slideLetters.style.fontFamily = 'Arial, sans-serif';
    slideLetters.style.fontWeight = 'bold';
    slideLetters.style.opacity = '0';
    slideLetters.style.textTransform = 'uppercase';
    slideLetters.style.transform = 'translate3d(0, 100%, 0)';
    slideLetters.style.transition = 'opacity 1.4s, transform 1s';

    slideTitle.appendChild(slideLetters);
  }


  var slideImage = document.createElement('div');
  slideImage.setAttribute('class', 'slide__image');
  slideImage.setAttribute('id', 'slide__image__' + studies[key].name.toLowerCase());
  slideImage.style.backgroundImage = studies[key].image;
  slideImage.style.backgroundRepeat = 'no-repeat';
  slideImage.style.backgroundPosition = 'center';
  slideImage.style.backgroundSize = '100%';
  slideImage.style.bottom = '0';
  slideImage.style.left = '0';
  slideImage.style.margin = 'auto';
  slideImage.style.position = 'absolute';
  slideImage.style.right = '0';
  slideImage.style.transform = 'scale3d(.5,.5,.5) translate3d(40%,0,0)';
  slideImage.style.transition = 'transform .5s';
  document.getElementsByClassName('slide')[key].appendChild(slideImage);

  var slideBtn = document.createElement('li');
  slideBtn.setAttribute('class', 'slide__btn');
  slideBtn.setAttribute('id', 'slide__btn__' + studies[key].name.toLowerCase());
  slideBtn.style.cursor = 'pointer';
  slideBtn.style.height = '16px';
  slideBtn.style.position = 'relative';
  slideBtn.style.transform = 'background-color .3s';
  slideBtn.style.width = 'calc(' + (100 / Object.keys(studies).length) + '% - 2px)';
  document.getElementById('slide__dots').appendChild(slideBtn);

  var slideBtnLabel = document.createElement('p');
  slideBtnLabel.setAttribute('class', 'slide__btn__label');
  slideBtnLabel.innerHTML = studies[key].name;
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
  document.getElementById('slide__btn__' + studies[key].name.toLowerCase()).appendChild(slideBtnLabel);
};


function letterRaise(p, q) {
  var slide = document.getElementsByClassName('slide')[q];

  if (p < Object.keys(studies)[q].length) {
    setTimeout(function() {
      slide.getElementsByClassName('slide__title__letter')[p].style.transform = 'translate3d(0,0,0)';
      slide.getElementsByClassName('slide__title__letter')[p].style.opacity = '1';
      p++;

      letterRaise(p,q)

    }, 20);
  }
}

function slideShift() {
  slideProgressBar.style.width = 100 * ((slideNumber + 1) / Object.keys(studies).length) + '%';
  slideContainer.style.transform = 'translate3d(' + (-100 * (slideNumber)) + '%,0,0)';

  for (var j = 0; j < Object.keys(studies).length; j++) {
    var slide = document.getElementsByClassName('slide');
    var slideImage = document.getElementsByClassName('slide__image');
    var slideLetterCount = 0;

    if (slideNumber == j) {
      letterRaise(slideLetterCount, j);
      slideImage[j].style.transform = 'scale3d(1,1,1) translate3d(0,0,0)';

    } else {

      for (slideLetterCount = 0; slideLetterCount < Object.keys(studies)[j].length; slideLetterCount++) {
        slideImage[j].style.transform = 'scale3d(.5,.5,.5) translate3d(40%,0,0)';
        slide[j].getElementsByClassName('slide__title__letter')[slideLetterCount].style.transform = 'translate3d(0,100%,0)';
        slide[j].getElementsByClassName('slide__title__letter')[slideLetterCount].style.opacity = '0';
      }
    }
  }
}
slideShift();

function slideJump(n) {
  slideNumber = n;
  slideShift();
}

for (var m = 0; m < Object.keys(studies).length; m++) {
  document.getElementsByClassName('slide__btn')[m].addEventListener('click', function(m) {
    return function() {
      slideJump(m);
    };
  }(m));
}


arrowRight.addEventListener('click', function() {
  if (slideNumber >= Object.keys(studies).length - 1) {
    slideNumber = 0;
  } else {
    slideNumber++;
  }
  slideShift();
})

arrowLeft.addEventListener('click',function() {
  if (slideNumber <= 0) {
    slideNumber = Object.keys(studies).length - 1;
  } else {
    slideNumber--;
  }
  slideShift();
})
