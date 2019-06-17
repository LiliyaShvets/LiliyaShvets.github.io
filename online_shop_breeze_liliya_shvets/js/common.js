'use strict';

var languageSwitch = document.getElementById("list_lang");
var btnsL = languageSwitch.getElementsByClassName("btn_lang");

for (var i = 0; i < btnsL.length; i++) {
  btnsL[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("l_active");
  current[0].className = current[0].className.replace(" l_active", "");
  this.className += " l_active";
  });
};



var currencySwitch = document.getElementById("list_currency");
var btnsc = currencySwitch.getElementsByClassName("btn_cur");

for (var i = 0; i < btnsc.length; i++) {
  btnsc[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("c_active");
  current[0].className = current[0].className.replace(" c_active", "");
  this.className += " c_active";
  });
};



var modal = document.getElementById("loginModal");
var btn = document.getElementById("loginBtn");
var span = document.getElementsByClassName("l_close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};


var modalS = document.getElementById("singModal");
var btnS = document.getElementById("singBtn");
var spanS = document.getElementsByClassName("s_close")[0];

btnS.onclick = function() {
  modalS.style.display = "block";
}

spanS.onclick = function() {
  modalS.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modalS) {
    modalS.style.display = "none";
  }
};






var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}