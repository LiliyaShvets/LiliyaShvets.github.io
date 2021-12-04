// HREF SCROLL
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function (e) {
    e.preventDefault();
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};


// BURGER MENU
const burgerMenuBtn = document.querySelector('.togle-menu');
const burgerMenu = document.querySelector('.burger-nav');
const burgerMenuClose = document.querySelector('.burger-nav__close');
const bodyBg = document.querySelector('.burger-nav__bg');
const body = document.body;

burgerMenuBtn.addEventListener("click", function() {
  burgerMenu.classList.add('nav-visible');
  bodyBg.classList.add('dark-bg');
  if (window.screen.width <= 480){
    body.setAttribute('style', "overflow:hidden;");
  }
});

burgerMenuClose.addEventListener("click", function() {
  burgerMenu.classList.remove('nav-visible');
  bodyBg.classList.remove('dark-bg');
  body.setAttribute('style', "overflow:visible;");

});


//STICKY HEADER
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    document.getElementById("header").classList.add("sticky")
  } else {
    document.getElementById("header").classList.remove("sticky");
  }
};


// ACTIVE MENU LINK
const menuItem = document.querySelectorAll('.menu__item');

for(let j = 0; j < menuItem.length; j++) {
  let thismenuItem = menuItem[j];
  let location = window.location.href;
  let link = menuItem[j].href;

  if (location == link) {
    thismenuItem.classList.add('active-menu');
  }
}


// PRICING OPEN ROWS
const showRowsBtn = document.getElementsByClassName("price-toggle__btn");

for (let i = 0; i < showRowsBtn.length; i++) {
  let thisshowRowsBtn = showRowsBtn[i];
  let targetRows = thisshowRowsBtn.getAttribute('data-number');
  let thisTargetRows = document.getElementById(targetRows);

  thisshowRowsBtn.addEventListener("click", function(event) {
    thisTargetRows.classList.toggle('show-rows');
    thisshowRowsBtn.classList.toggle('turn-arrow');
  }, false);
}


// SKROLL BUTTON TOP
let time;
function up() {
	let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-100);
		time = setTimeout('up()',20);
	} else clearTimeout(t);
	return false;
}


// SIGNUP POPUP
// const signUpBtn = document.getElementsByClassName('signup-button');
// const signUpPopup = document.querySelector('.popup-signup');
// const signUpPopupClose = document.querySelector('.popup-signup__close');

// for (let i = 0; i < signUpBtn.length; i++) {
//   let thisSignUpBtn = signUpBtn[i];

//   thisSignUpBtn.addEventListener("click", function(event) {
//       signUpPopup.setAttribute('style', "display:flex;");
//       body.setAttribute('style', "overflow:hidden;");
//   }, false);
  
//   signUpPopupClose.addEventListener("click", function() {
//     signUpPopup.setAttribute('style', "display:none;");
//     body.setAttribute('style', "overflow:visible;");
//   }, false);
// }


// LOGIN POPUP
// const logInBtn = document.querySelector('.log-in__btn');
// const logInPopup = document.querySelector('.popup-login');
// const logInPopupClose = document.querySelector('.popup-login__close');

// logInBtn.addEventListener("click", function(event) {
//   logInPopup.setAttribute('style', "display:flex;");
//   body.setAttribute('style', "overflow:hidden;");
// }, false);

// logInPopupClose.addEventListener("click", function() {
//   logInPopup.setAttribute('style', "display:none;");
//   body.setAttribute('style', "overflow:visible;");
// }, false);



// VIDEO FEEDBACK POPUP
const stopPlayer = document.querySelectorAll('.stop-player');
const feedbackPopupSlide = document.querySelectorAll('.feedback-video__popup-frame');

for (let t = 0; t < feedbackPopupSlide.length; t++) {
   let srcFeedbackPopupSlide = feedbackPopupSlide[t].getAttribute('src');

  stopPlayer.forEach(function(item){
    item.addEventListener("click", function() {
      feedbackPopupSlide[t].setAttribute("src", srcFeedbackPopupSlide);
    }, false);
  })
}


// VIDEO GMAT POPUP
const openVideoGmat = document.querySelector('.video-item');
const videoGmatPopup = document.querySelector('.video-item__popup');
const videoGmatClose = document.querySelector('.video-item__popup-close');
const videoGmatPlayer = document.getElementById('video-platform'); 
const srcVideoGmat = videoGmatPlayer.getAttribute('src');

openVideoGmat.addEventListener("click", function(event) {
  videoGmatPopup.setAttribute('style', "display:flex;");
  body.setAttribute('style', "overflow:hidden;");
}, false);

videoGmatClose.addEventListener("click", function() {
  videoGmatPopup.setAttribute('style', "display:none;");
  videoGmatPlayer.setAttribute("src", srcVideoGmat);
  body.setAttribute('style', "overflow:visible;");
}, false);



