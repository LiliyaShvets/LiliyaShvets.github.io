'use strict';

class SliderPlugin {
	constructor(settings) {
		this.sliderContainer = document.querySelector(settings ? settings.sliderContainer || '.slider' : '.slider');
		this.dotsWrapper = document.createElement('ul');
		this.arrowLeftBtn = document.createElement('button');
        this.arrowRightBtn = document.createElement('button');
        this.headline = document.createElement('h1');
		this.totalSlides = this.sliderContainer.querySelectorAll('.slide').length;
		this.slideWidth = parseInt(this.sliderContainer.querySelector('.slide').offsetWidth);
		this.currentSlide = 1;
		this.transitionSpeed = settings ? settings.speed || 300 : 300;
	};

	init() {
		let newHtml = this.sliderContainer.innerHTML;
		this.sliderContainer.innerHTML = `<div class="slider__inner">${newHtml}</div>`;
		this.sliderInner = this.sliderContainer.querySelector('.slider__inner');

		let cloneFirst = this.sliderContainer.querySelectorAll('.slide')[0].cloneNode(true);
		this.sliderInner.appendChild(cloneFirst);

		let cloneLast = this.sliderContainer.querySelectorAll('.slide')[this.totalSlides - 1].cloneNode(true);
		this.sliderInner.insertBefore(cloneLast, this.sliderInner.firstChild);

		this.arrowLeftBtn.className = 'slider__left';
        this.arrowRightBtn.className = 'slider__right';
        this.headline.className = 'headline1';
		this.dotsWrapper.className = 'slider__dots-wrapper';
		this.sliderContainer.appendChild(this.arrowLeftBtn);
        this.sliderContainer.appendChild(this.arrowRightBtn);
        this.sliderContainer.appendChild(this.headline);
		this.sliderContainer.appendChild(this.dotsWrapper);
		this.arrowLeftBtn = this.sliderContainer.querySelector('.slider__left');
        this.arrowRightBtn = this.sliderContainer.querySelector('.slider__right');
        this.headline = this.sliderContainer.querySelector('.headline1');
		this.dotsWrapper = this.sliderContainer.querySelector('.slider__dots-wrapper');

		this.allSlides = this.sliderContainer.querySelectorAll('.slide');
		this.sliderInner.style.width = (this.totalSlides + 2) * 100 + '%';
		for (let i = 0; i < this.totalSlides + 2; i++) {
			this.allSlides[i].style.width = 100 / (this.totalSlides + 2) + '%';
		}

		this.buildDots();
		this.setDot();
		this.initArrows();

		window.addEventListener('resize', this.debounce(this.updateSliderDimension.bind(this), 100), false);
	}

	initArrows() {
		if (this.arrowLeftBtn !== '') {
			this.arrowLeftBtn.addEventListener('click', () => {
				if (!this.sliderContainer.classList.contains('isAnimating')) {
					if (this.currentSlide === 1) {
						this.currentSlide = this.totalSlides + 1;
						this.sliderInner.style.left = -this.currentSlide * this.slideWidth + 'px';
					}
					this.currentSlide--;
					setTimeout(() => {
						this.goToSlide();
					}, 20);
				}
			}, false);
		}

		if (this.arrowRightBtn !== '') {
			this.arrowRightBtn.addEventListener('click', () => {
				if (!this.sliderContainer.classList.contains('isAnimating')) {
					if (this.currentSlide === this.totalSlides) {
						this.currentSlide = 0;
						this.sliderInner.style.left = -this.currentSlide * this.slideWidth + 'px';
					}
					this.currentSlide++;
					setTimeout(() => {
						this.goToSlide();
					}, 20);
				}
			}, false);
		}
	};

	goToSlide() {
		this.sliderInner.style.transition = 'left ' + this.transitionSpeed / 1000 + 's ' + 'ease';
		this.sliderInner.style.left = -this.currentSlide * this.slideWidth + 'px';
		this.sliderContainer.classList.add('isAnimating');

		setTimeout(() => {
			this.sliderInner.style.transition = '';
			this.sliderContainer.classList.remove('isAnimating');
		}, this.transitionSpeed);

		this.setDot();
	};

	buildDots() {
		for (let i = 0; i < this.totalSlides; i++) {
			let dot = document.createElement('li');
			dot.setAttribute('data-slide', i + 1);
			this.dotsWrapper.appendChild(dot);
		}

		this.dotsWrapper.addEventListener('click', (e) => {
			if (e.target && e.target.nodeName === 'LI') {
				this.currentSlide = e.target.getAttribute('data-slide');
				this.goToSlide();
			}
		}, false);
	};

	setDot() {
		let targetDot = this.currentSlide - 1;

		for (let j = 0; j < this.totalSlides; j++) {
			this.dotsWrapper.querySelectorAll('li')[j].classList.remove('active');
		}

		if (this.currentSlide - 1 < 0) {
			targetDot = this.totalSlides - 1;
		} else if (this.currentSlide - 1 > this.totalSlides - 1) {
			targetDot = 0;
		}

		this.dotsWrapper.querySelectorAll('li')[targetDot].classList.add('active');
	};

	updateSliderDimension() {
		console.log('something');
		this.slideWidth = parseInt(this.sliderContainer.querySelectorAll('.slide')[0].offsetWidth);
		this.sliderInner.style.left = -this.slideWidth * this.currentSlide + 'px';

		for (let i = 0; i < this.totalSlides + 2; i++) {
			if (this.allSlides[i].offsetHeight > this.sliderContainer.offsetHeight) {
				this.sliderContainer.style.height = this.allSlides[i].offsetHeight + 'px';
			}
		}
	};

	debounce(f, ms) {

		let timer = null;

		return (...args) => {
			const onComplete = () => {
				f.apply(this, args);
				timer = null;
			};

			if (timer) {
				clearTimeout(timer);
			}

			timer = setTimeout(onComplete, ms);
		};
	}
}

new SliderPlugin().init();