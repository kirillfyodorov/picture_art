/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/parts/accordion.js":
/*!***********************************!*\
  !*** ./src/js/parts/accordion.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function accordion() {
  var accordionHeading = document.querySelectorAll('.accordion-heading'),
      accordionBlock = document.querySelectorAll('.accordion-block');
  var pt = 0,
      pb = 0,
      h = 0;

  function showAccordeonSlideFunction(i) {
    var p = accordionBlock[i].querySelector('p');
    var showAccordeonSlide = setInterval(function () {
      if (pt < 3) {
        pt += 0.1;
        accordionBlock[i].style.paddingTop = pt + 'rem';
      } else if (h < p.clientHeight) {
        h = h + 3;
        accordionBlock[i].style.height = h + 'px';
      } else if (pb < 3) {
        pb += 0.1;
        accordionBlock[i].style.paddingBottom = pb + 'rem';
      } else {
        clearInterval(showAccordeonSlide);
      }
    }, 3);
  }

  function hideAccordeonFunction(i) {
    var p = accordionBlock[i].querySelector('p');
    var hideAccordeonSlide = setInterval(function () {
      if (pt < 3) {
        pt += 0.1;
        accordionBlock[i].style.paddingTop = 3 - pt + 'rem';
      } else if (h < p.clientHeight) {
        h = h + 3;
        accordionBlock[i].style.height = p.clientHeight - h + 'px';
      } else if (pb < 3) {
        pb += 0.1;
        accordionBlock[i].style.paddingBottom = 3 - pb + 'rem';
      } else {
        clearInterval(hideAccordeonSlide);
      }
    }, 3);
  }

  accordionHeading.forEach(function (e, i) {
    e.classList.remove('ui-accordion-header-active');
    e.addEventListener('click', function () {
      e.classList.add('ui-accordion-header-active');
      accordionBlock.forEach(function (elem, j) {
        pt = 0;
        pb = 0;
        h = 0;

        if (i == j && elem[j].classList.contains('accordion-slide-active')) {
          return;
        } else {
          if (elem[j].classList.contains('accordion-slide-active')) {
            hideAccordeonFunction(j);
            showAccordeonSlideFunction(i);
            elem[j].classList.remove('accordion-slide-active');
            e[i].classList.add('accordion-slide-active');
          }
        }
      });
    });
  });
}

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/calsulator.js":
/*!************************************!*\
  !*** ./src/js/parts/calsulator.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function calsulator() {
  var size = document.querySelector('#size'),
      material = document.querySelector('#material'),
      options = document.querySelector('#options'),
      promocode = document.querySelector('.promocode'),
      priceInput = document.querySelector('.calc-price');
  var sizePrices = {
    1: 500,
    2: 1000,
    3: 1500,
    4: 2000
  },
      materialPrices = {
    1: 500,
    2: 1000,
    3: 1500
  },
      optionsPrices = {
    1: 500,
    2: 1000,
    3: 2000
  };

  function pricingChange() {
    if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
      var price = sizePrices[size.options.selectedIndex] + materialPrices[material.options.selectedIndex];
      console.log(price);

      if (options.options.selectedIndex > 0) {
        price = price + optionsPrices[options.options.selectedIndex];
      }

      console.log(price);

      if (promocode.value == 'IWANTPOPART') {
        price = price * 0.7;
      }

      console.log(price);
      priceInput.textContent = price;
    } else {
      priceInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    }
  }

  size.addEventListener('change', function () {
    pricingChange();
  });
  material.addEventListener('change', function () {
    pricingChange();
  });
  options.addEventListener('change', function () {
    pricingChange();
  });
  promocode.addEventListener('input', function () {
    pricingChange();
  });
}

module.exports = calsulator;

/***/ }),

/***/ "./src/js/parts/feedbackSlider.js":
/*!****************************************!*\
  !*** ./src/js/parts/feedbackSlider.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function feedbackSlider() {
  var slideIndex = 1,
      slides = document.querySelectorAll('.feedback-slider-item'),
      prev = document.querySelector('.main-prev-btn'),
      next = document.querySelector('.main-next-btn'),
      preventSlide = 1,
      width = slides[0].clientWidth;

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    var left = 0;
    slides[slideIndex - 1].style.left = '-100%';
    console.log(slideIndex + ' ' + preventSlide);

    if (slideIndex - preventSlide == 1 || preventSlide == slides.length && slideIndex == 1) {
      var sliderAnimation = setInterval(function () {
        left = left + 10;

        if (preventSlide == slides.length) {
          slides[slides.length - 1].style.left = left + 'px';
        } else {
          slides[slideIndex - 2].style.left = left + 'px';
        }

        slides[slideIndex - 1].style.left = -width + left + 'px';

        if (left >= width) {
          preventSlide = slideIndex;
          clearInterval(sliderAnimation);
        }
      }, 3);
    } else {
      var _sliderAnimation = setInterval(function () {
        left = left + 10;
        slides[preventSlide - 1].style.left = -left + 'px';
        slides[slideIndex - 1].style.left = width - left + 'px';

        if (left >= width) {
          preventSlide = slideIndex;
          clearInterval(_sliderAnimation);
        }
      }, 3);
    }
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function feedbackSliderTimerFunction() {
    plusSlides(1);
  }

  prev.addEventListener('click', function () {
    clearInterval(feedbackSliderTimer);
    plusSlides(-1);
    feedbackSliderTimer = setInterval(feedbackSliderTimerFunction, 5000);
  });
  next.addEventListener('click', function () {
    clearInterval(feedbackSliderTimer);
    plusSlides(1);
    feedbackSliderTimer = setInterval(feedbackSliderTimerFunction, 5000);
  });
  var feedbackSliderTimer = setInterval(feedbackSliderTimerFunction, 5000);
}

module.exports = feedbackSlider;

/***/ }),

/***/ "./src/js/parts/filter.js":
/*!********************************!*\
  !*** ./src/js/parts/filter.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function filter() {
  var portfolioWrapper = document.querySelector('.portfolio-wrapper'),
      portfolioBlock = portfolioWrapper.querySelectorAll('.portfolio-block'),
      portfolioMenu = document.querySelector('.portfolio-menu'),
      portfolioMenuItem = portfolioMenu.querySelectorAll('li'),
      portfolioNo = document.querySelector('.portfolio-no');
  portfolioMenuItem.forEach(function (e) {
    e.addEventListener('click', function () {
      portfolioMenuItem.forEach(function (e) {
        e.classList.remove('active');
      });

      if (e.className == 'granddad' || e.className == 'grandmother') {
        portfolioBlock.forEach(function (elem) {
          elem.style.display = 'none';
        });
        portfolioNo.style.display = 'block';
      } else {
        portfolioNo.style.display = '';
        portfolioBlock.forEach(function (elem) {
          if (!elem.classList.contains(e.className)) {
            elem.style.display = 'none';
            portfolioNo.style.display = '';
          } else {
            elem.style.display = '';
          }
        });
      }

      e.classList.add('active');
    });
  });
}

module.exports = filter;

/***/ }),

/***/ "./src/js/parts/gift.js":
/*!******************************!*\
  !*** ./src/js/parts/gift.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function gift() {
  var btnGift = document.querySelector('.fixed-gift'),
      popupGift = document.querySelector('.popup-gift'),
      btnClose = popupGift.querySelector('.popup-close');
  btnGift.addEventListener('click', function () {
    btnGift.remove();
    popupGift.style.display = 'block';
  });
  popupGift.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      popupGift.style.display = '';
    }
  });
  btnClose.addEventListener('click', function () {
    popupGift.style.display = '';
  });
}

module.exports = gift;

/***/ }),

/***/ "./src/js/parts/mainSlider.js":
/*!************************************!*\
  !*** ./src/js/parts/mainSlider.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function mainSlider() {
  var sliderWrapper = document.querySelector('.main-slider'),
      slides = sliderWrapper.querySelectorAll('.main-slider-item'),
      slideIndex = 1,
      preventSlide = 1,
      height = slides[0].clientHeight;

  function showSlides(n) {
    if (n > slides.length) {
      slideIndex = 1;
    }

    if (n < 1) {
      slideIndex = slides.length;
    }

    var top = 0;
    slides[slideIndex - 1].style.top = '-100%';
    var sliderAnimation = setInterval(function () {
      top = top + 5;

      if (preventSlide == slides.length) {
        slides[slides.length - 1].style.top = top + 'px';
      } else {
        slides[slideIndex - 2].style.top = top + 'px';
      }

      slides[slideIndex - 1].style.top = -height + top + 'px';

      if (top >= height) {
        preventSlide = slideIndex;
        clearInterval(sliderAnimation);
      }
    }, 5);
  }

  function plusSlides() {
    showSlides(slideIndex += 1);
  }

  var mainSliderTimer = setInterval(function () {
    plusSlides();
  }, 3000);
}

module.exports = mainSlider;

/***/ }),

/***/ "./src/js/parts/modalOrder.js":
/*!************************************!*\
  !*** ./src/js/parts/modalOrder.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalOrder() {
  var btnOrder = document.querySelectorAll('.button-design'),
      popupDesign = document.querySelector('.popup-design'),
      popupClose = popupDesign.querySelector('.popup-close');
  btnOrder.forEach(function (e) {
    e.addEventListener('click', function () {
      popupDesign.style.display = 'block';
    });
  });
  popupDesign.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      popupDesign.style.display = '';
    }
  });
  popupClose.addEventListener('click', function () {
    popupDesign.style.display = '';
  });
}

module.exports = modalOrder;

/***/ }),

/***/ "./src/js/parts/modalСonsultation.js":
/*!*******************************************!*\
  !*** ./src/js/parts/modalСonsultation.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function modalConsultation() {
  var btnConsultation = document.querySelectorAll('.button-consultation'),
      popupConsultation = document.querySelector('.popup-consultation'),
      popupClose = popupConsultation.querySelector('.popup-close');
  btnConsultation.forEach(function (e) {
    e.addEventListener('click', function () {
      popupConsultation.style.display = 'block';
    });
  });
  popupConsultation.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      popupConsultation.style.display = '';
    }
  });
  popupClose.addEventListener('click', function () {
    popupConsultation.style.display = '';
  });
}

module.exports = modalConsultation;

/***/ }),

/***/ "./src/js/parts/moreStyles.js":
/*!************************************!*\
  !*** ./src/js/parts/moreStyles.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function moreStyles() {
  var hiddenStyles = document.querySelectorAll('.styles-2'),
      btnStyles = document.querySelector('.button-styles');
  btnStyles.addEventListener('click', function () {
    btnStyles.style.display = 'none';
    hiddenStyles.forEach(function (e) {
      e.classList.remove("hidden-lg");
      e.classList.remove("hidden-md");
      e.classList.remove("hidden-sm");
      e.classList.remove("hidden-xs");
      e.classList.add("col-sm-3");
      e.classList.add("col-sm-offset-0");
      e.classList.add("col-xs-10");
      e.classList.add("col-xs-offset-1");
    });
  });
}

module.exports = moreStyles;

/***/ }),

/***/ "./src/js/parts/sizesBlock.js":
/*!************************************!*\
  !*** ./src/js/parts/sizesBlock.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function sizesBlock() {
  var blockSizes = document.querySelectorAll('.sizes-block');

  if (document.documentElement.clientWidth > 768) {
    blockSizes.forEach(function (e, i) {
      var p = e.querySelectorAll('p');
      e.addEventListener('mouseover', function () {
        e.querySelector('img').setAttribute('src', "img/sizes-".concat(i + 1, "-1.png"));
        p.forEach(function (e) {
          if (e.className != 'sizes-hit') {
            e.style.display = 'none';
          }
        });
      });
      e.addEventListener('mouseout', function () {
        e.querySelector('img').setAttribute('src', "img/sizes-".concat(i + 1, ".png"));
        p.forEach(function (e) {
          e.style.display = '';
        });
      });
    });
  } else {
    blockSizes.forEach(function (e, i) {
      var p = e.querySelectorAll('p'),
          img = e.querySelector('img');
      window.addEventListener('touchstart', function (elem) {
        if (elem.target == p[0] || elem.target == p[1] || elem.target == p[2] || elem.target == p[3] || elem.target == img) {
          img.setAttribute('src', "img/sizes-".concat(i + 1, "-1.png"));
          p.forEach(function (e) {
            if (e.className != 'sizes-hit') {
              e.style.display = 'none';
            }
          });
        } else {
          img.setAttribute('src', "img/sizes-".concat(i + 1, ".png"));
          p.forEach(function (e) {
            e.style.display = '';
          });
        }
      });
    });
  }
}

module.exports = sizesBlock;

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

window.addEventListener('DOMContentLoaded', function () {
  'use strict';

  var mainSlider = __webpack_require__(/*! ./parts/mainSlider.js */ "./src/js/parts/mainSlider.js"),
      modalOrder = __webpack_require__(/*! ./parts/modalOrder.js */ "./src/js/parts/modalOrder.js"),
      modalConsultation = __webpack_require__(/*! ./parts/modalСonsultation.js */ "./src/js/parts/modalСonsultation.js"),
      gift = __webpack_require__(/*! ./parts/gift.js */ "./src/js/parts/gift.js"),
      moreStyles = __webpack_require__(/*! ./parts/moreStyles.js */ "./src/js/parts/moreStyles.js"),
      filter = __webpack_require__(/*! ./parts/filter.js */ "./src/js/parts/filter.js"),
      calsulator = __webpack_require__(/*! ./parts/calsulator.js */ "./src/js/parts/calsulator.js"),
      sizesBlock = __webpack_require__(/*! ./parts/sizesBlock.js */ "./src/js/parts/sizesBlock.js"),
      feedbackSlider = __webpack_require__(/*! ./parts/feedbackSlider.js */ "./src/js/parts/feedbackSlider.js"),
      accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"); //forms = require('./parts/forms.js');


  mainSlider();
  modalOrder();
  modalConsultation();
  gift();
  moreStyles();
  filter();
  calsulator();
  sizesBlock();
  feedbackSlider();
  accordion(); //forms();
});

/***/ })

/******/ });