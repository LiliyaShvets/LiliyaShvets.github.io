'use script';

var headElem = document.getElementById('head');
var logoElem = document.getElementById('main_logo');

var headSourceBottom = headElem.getBoundingClientRect().bottom + window.pageYOffset;

window.onscroll = function() {
  if (headElem.classList.contains('header_glide') && window.pageYOffset < headSourceBottom) {
  headElem.classList.remove('header_glide');
  headElem.appendChild(logoElem);
  } 
  else if (window.pageYOffset > headSourceBottom) {
	headElem.classList.add('header_glide');
	logoElem.remove();
  } 
};
