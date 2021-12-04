
$(document).ready(function () {

  // SLIDERS
  
  // VIDEO GMAT LSAT SLIDER
  const videoSwiper = new Swiper('.video-slider.swiper', {
    slidesPerView: 1,
    spaceBetween: 60,
    longSwipesMs: 0,
    loopPreventsSlide:false,
    longSwipes: true,
    longSwipesRatio: 0,
    threshold: 0,
    slideToClickedSlide:true,
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    keyboard: true,
  });


  // HEAD SLIDER
  const headSwiper = new Swiper('.head-slider.swiper', {
    slidesPerView: 1,
    longSwipesMs: 0,
    loopPreventsSlide:false,
    longSwipes: true,
    longSwipesRatio: 0,
    threshold: 0,
    slideToClickedSlide:true,
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });

  // NETWORKING SLIDER 
  const networkingSwiper = new Swiper('.networking-slider.swiper', {
    direction: "vertical",
    slidesPerView: 1.2,
    slidesOffsetAfter: 50,
    spaceBetween: 50,
    longSwipesMs: 0,
    loopPreventsSlide:false,
    longSwipes: true,
    longSwipesRatio: 0,
    threshold: 0,
    slideToClickedSlide:true,
    speed: 900,
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });


  // PRICE SLIDER 
  const priceSwiper = new Swiper('.price-slider.swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    longSwipesMs: 0,
    loopPreventsSlide:false,
    longSwipes: true,
    longSwipesRatio: 0,
    threshold: 0,
    slideToClickedSlide:true,
    speed: 900,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    pagination: {
      el: ".swiper-pagination",
    },
    keyboard: true,
  });


  // FEEDBACK SLIDER 
  const feedbackSwiper = new Swiper('.feedback-slider.swiper', {
    slidesPerView: 1.1,
    spaceBetween: 30,
    slidesOffsetBefore: 15,
    longSwipesMs: 0,
    loopPreventsSlide:false,
    longSwipes: true,
    longSwipesRatio: 0,
    threshold: 0,
    slideToClickedSlide:true,
    speed: 900,
    breakpoints: {
      520: {
        slidesPerView: 1.2,
      },
      650: {
        slidesPerView: 1.4,
        spaceBetween: 38,
      },
      800: {
        slidesPerView: 1.8,
      },
      990: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2.5,
      },
      1400: {
        slidesPerView: 3,
        spaceBetween: 45,
      },
      1660: {
        slidesPerView: 3.1,
        spaceBetween: 49,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    keyboard: true,
  });


  // STORIES SLIDER 
  const storiesSwiper = new Swiper('.stories-slider.swiper', {
    slidesPerView: 1,
    spaceBetween: 24,
    longSwipesMs: 0,
    loopPreventsSlide:false,
    longSwipes: true,
    longSwipesRatio: 0,
    threshold: 0,
    slideToClickedSlide:true,
    speed: 900,
    breakpoints: {
      480: {
        slidesPerView: 1.2,
      },
      580: {
        slidesPerView: 1.5,
        spaceBetween: 36,
      },
      740: {
        slidesPerView: 1,
        spaceBetween: 36,
      },
      769: {
        slidesPerView: 1.2,      
      },
      840: {
        slidesPerView: 1.6,
      },
      990: {
        slidesPerView: 2,
      },
      1100: {
        slidesPerView: 2.5,
      },
      1200: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".swiper-button-next.stories-next",
      prevEl: ".swiper-button-prev.stories-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    keyboard: true,
  });



  // STORIES POPUP SLIDER 
  const openModal = document.getElementsByClassName("open-modal");
  const popupSlider = document.querySelector('.popup-stories-slider');
  const storiesSlider = document.querySelector('.stories');
  const body = document.body;
  
  for (let i = 0; i < openModal.length; i++) {
    let thisOpenModal = openModal[i];
  
  
    thisOpenModal.addEventListener("click", function(event) {
      popupSlider.setAttribute('style', "display:flex;");
      body.setAttribute('style', "overflow:hidden;");
      storiesSlider.classList.add('disable');

      const storiesPopSwiper = new Swiper('.popup-stories-slider.swiper', {
    
        slidesPerView: 1,
        spaceBetween: 24,
        longSwipesMs: 0,
        loopPreventsSlide:false,
        longSwipes: true,
        longSwipesRatio: 0,
        threshold: 0,
        slideToClickedSlide:true,
        speed: 900,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        keyboard: true,
      });

      storiesPopSwiper.slideTo(i);

    }, false);

    const closeModal = document.querySelectorAll('.popup-stories__close-btn');

    for (let j = 0; j < closeModal.length; j++) {
      let thisCloseModal = closeModal[j];

      thisCloseModal.addEventListener("click", function() {
        popupSlider.setAttribute('style', "display:none;");
        body.setAttribute('style', "overflow:visible;");
        storiesSlider.classList.remove('disable');
      }, false);

    }

  }


  // FEEDBACK POPUP SLIDER 
  const openFeedbackVideo = document.getElementsByClassName("feedback-video__item");
  const popupFeedbackVideo = document.querySelector('.feedback-video__popup-slider');
  
  for (let t = 0; t < openFeedbackVideo.length; t++) {
    let thisOpenFeedbackVideo = openFeedbackVideo[t];
  
  
    thisOpenFeedbackVideo.addEventListener("click", function(event) {
      popupFeedbackVideo.setAttribute('style', "display:flex;");
      body.setAttribute('style', "overflow:hidden;");

      const feedbackVideoSwiper = new Swiper('.feedback-video__popup-slider.swiper', {
        initialSlide: 2,
        slidesPerView: 1,
        spaceBetween: 24,
        longSwipesMs: 0,
        loopPreventsSlide:false,
        longSwipes: true,
        longSwipesRatio: 0,
        threshold: 0,
        slideToClickedSlide:true,
        speed: 900,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        keyboard: true,
      });

      feedbackVideoSwiper.slideTo(t);

    }, false);

    const closeFeedbackVideo = document.querySelector('.feedback-video__popup-close');

    closeFeedbackVideo.addEventListener("click", function() {
      popupFeedbackVideo.setAttribute('style', "display:none;");
      body.setAttribute('style', "overflow:visible;");
    }, false);
    
  }


  // NEWS SLIDER MOBILE
 (function() {

  const breakpointNews = window.matchMedia( '(min-width:740px)' );

  let newsSwiper;
  const breakpointCheckerNews = function() {

    if ( breakpointNews.matches === true ) {

    if ( newsSwiper !== undefined ) newsSwiper.destroy( true, true );

    return;

      } else if ( breakpointNews.matches === false ) {

        return enableSwiperNews();

      }

  };

  const enableSwiperNews = function() {
  
    const newsSwiper = new Swiper('.news-slider.swiper', {
      cssMode: true,
      slidesPerView: 1,
      spaceBetween: 32,
      longSwipesMs: 0,
      loopPreventsSlide:false,
      longSwipes: true,
      longSwipesRatio: 0,
      threshold: 0,
      slideToClickedSlide:true,
      speed: 900,
      breakpoints: {
        590: {
          slidesPerView: 1.2,
        },
        650: {
          slidesPerView: 1.4,
          spaceBetween: 38,
        },
        710: {
          slidesPerView: 1.6,
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true
      },
      keyboard: true,
      mousewheel: true,
    });

  };

  breakpointNews.addListener(breakpointCheckerNews);

  breakpointCheckerNews();


  })();


 // GMAT PRICING SLIDER MOBILE
  (function() {

    const breakpointGmatPricing = window.matchMedia( '(min-width:740px)' );
  
    let gmatPricingSwiper;
    const breakpointCheckerGmatPricing = function() {
  
      if ( breakpointGmatPricing.matches === true ) {
  
      if ( gmatPricingSwiper !== undefined ) gmatPricingSwiper.destroy( true, true );
  
      return;
  
        } else if ( breakpointGmatPricing.matches === false ) {
  
          return enableSwiperGmatPricing();
  
        }
  
    };

    const enableSwiperGmatPricing = function() {
    
      const gmatPricingSwiper = new Swiper('.price-gmat-slider.swiper', {
        slidesPerView: 1,
        spaceBetween: 32,
        longSwipesMs: 0,
        loopPreventsSlide:false,
        longSwipes: true,
        longSwipesRatio: 0,
        threshold: 0,
        slideToClickedSlide:true,
        speed: 900,
        breakpoints: {
          480: {
            slidesPerView: 1.2,
          },
          650: {
            slidesPerView: 1.4,
            spaceBetween: 38,
          },
          710: {
            slidesPerView: 1.6,
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        keyboard: true,
      });
  
    };

    breakpointGmatPricing.addListener(breakpointCheckerGmatPricing);
  
    breakpointCheckerGmatPricing();
  
  
  })();



  // LSAT PRICING SLIDER MOBILE
  (function() {

    const breakpointLsatPricing = window.matchMedia( '(min-width:740px)' );
  
    let lsatPricingSwiper;
    const breakpointCheckerLsatPricing = function() {
  
      if ( breakpointLsatPricing.matches === true ) {
  
      if ( lsatPricingSwiper !== undefined ) lsatPricingSwiper.destroy( true, true );
  
      return;
  
        } else if ( breakpointLsatPricing.matches === false ) {
  
          return enableSwiperLsatPricing();
  
        }
  
    };

    const enableSwiperLsatPricing = function() {
    
      const lsatPricingSwiper = new Swiper('.price-lsat-slider.swiper', {
        slidesPerView: 1,
        spaceBetween: 32,
        longSwipesMs: 0,
        loopPreventsSlide:false,
        longSwipes: true,
        longSwipesRatio: 0,
        threshold: 0,
        slideToClickedSlide:true,
        speed: 900,
        breakpoints: {
          480: {
            slidesPerView: 1.2,
          },
          650: {
            slidesPerView: 1.4,
            spaceBetween: 38,
          },
          710: {
            slidesPerView: 1.6,
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        keyboard: true,
      });
  
    };

    breakpointLsatPricing.addListener(breakpointCheckerLsatPricing);
  
    breakpointCheckerLsatPricing();
  
  
  })();



  // GMAT USEFUL SLIDER MOBILE
  (function() {

    const breakpointGmatUseful = window.matchMedia( '(min-width:768px)' );
  
    let gmatUsefulSwiper;
    const breakpointCheckerGmatUseful = function() {
  
      if ( breakpointGmatUseful.matches === true ) {
  
      if ( gmatUsefulSwiper !== undefined ) gmatUsefulSwiper.destroy( true, true );
  
      return;
  
        } else if ( breakpointGmatUseful.matches === false ) {
  
          return enableSwiperGmatUseful();
  
        }
  
    };

    const enableSwiperGmatUseful = function() {
    
      const gmatUsefulSwiper = new Swiper('.useful-gmat-slider.swiper', {
        slidesPerView: 1,
        spaceBetween: 32,
        longSwipesMs: 0,
        loopPreventsSlide:false,
        longSwipes: true,
        longSwipesRatio: 0,
        threshold: 0,
        slideToClickedSlide:true,
        speed: 900,
        breakpoints: {
          390: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.6,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 38,
          },
          680: {
            slidesPerView: 2.4,
          },
          710: {
            slidesPerView: 2.7,
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        keyboard: true,
      });
  
    };

    breakpointGmatUseful.addListener(breakpointCheckerGmatUseful);
  
    breakpointCheckerGmatUseful();
  
  
  })();



  // LSAT USEFUL SLIDER MOBILE
  (function() {

    const breakpointLsatUseful = window.matchMedia( '(min-width:768px)' );
  
    let lsatUsefulSwiper;
    const breakpointCheckerLsatUseful = function() {
  
      if ( breakpointLsatUseful.matches === true ) {
  
      if ( lsatUsefulSwiper !== undefined ) lsatUsefulSwiper.destroy( true, true );
  
      return;
  
        } else if ( breakpointLsatUseful.matches === false ) {
  
          return enableSwiperLsatUseful();
  
        }
  
    };

    const enableSwiperLsatUseful = function() {
    
      const lsatUsefulSwiper = new Swiper('.useful-lsat-slider.swiper', {
        slidesPerView: 1,
        spaceBetween: 32,
        longSwipesMs: 0,
        loopPreventsSlide:false,
        longSwipes: true,
        longSwipesRatio: 0,
        threshold: 0,
        slideToClickedSlide:true,
        speed: 900,
        breakpoints: {
          390: {
            slidesPerView: 1.2,
          },
          480: {
            slidesPerView: 1.6,
          },
          650: {
            slidesPerView: 2,
            spaceBetween: 38,
          },
          680: {
            slidesPerView: 2.4,
          },
          710: {
            slidesPerView: 2.7,
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        scrollbar: {
          el: '.swiper-scrollbar',
          draggable: true
        },
        keyboard: true,
      });
  
    };

    breakpointLsatUseful.addListener(breakpointCheckerLsatUseful);
  
    breakpointCheckerLsatUseful();
  
  
  })();



  // FEEDBACK VIDEO SLIDER MOBILE    
  const feedbackideoSwiper = new Swiper('.feedback-video-slider.swiper', {
    slidesPerView: 1,
    spaceBetween: 40,
    longSwipesMs: 0,
    loopPreventsSlide:false,
    longSwipes: true,
    longSwipesRatio: 0,
    threshold: 0,
    slideToClickedSlide:true,
    speed: 900,
    breakpoints: {
      850: {
        slidesPerView: 2,
      },
      1090: {
        slidesPerView: 3,
      }
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true
    },
    keyboard: true,
  });



  //FAQ
	$('.faq-item__question').on('click', function () {
		$('.faq-item__question').not(this).removeClass('show').next().slideUp();
		$(this).toggleClass('show').next().slideToggle();
	});
   

});




