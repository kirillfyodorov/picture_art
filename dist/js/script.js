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

  function showAccordeonSlideFunction(i) {
    var pt = 0,
        pb = 0,
        h = 0;
    var p = accordionBlock[i].querySelector('p');
    var showAccordeonSlide = setInterval(function () {
      if (pt < 3) {
        pt += 0.1;
        accordionBlock[i].style.paddingTop = pt + 'rem';
      } else if (h < p.clientHeight) {
        h = h + 2;
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
    var pt = 0,
        pb = 0,
        h = 0;
    var p = accordionBlock[i].querySelector('p');
    var hideAccordeonSlide = setInterval(function () {
      if (3 - pt > 0) {
        pt += 0.1;
        accordionBlock[i].style.paddingTop = (3 - pt).toFixed(1) + 'rem';
      } else if (p.clientHeight - h > 0) {
        h = h + 2;
        accordionBlock[i].style.height = Math.round(p.clientHeight - h) + 'px';
      } else if (3 - pb > 0) {
        pb += 0.1;
        accordionBlock[i].style.paddingBottom = (3 - pb).toFixed(1) + 'rem';
      } else {
        clearInterval(hideAccordeonSlide);
      }
    }, 3);
  }

  accordionHeading.forEach(function (e, i) {
    e.addEventListener('click', function () {
      accordionHeading.forEach(function (e) {
        e.classList.remove('ui-accordion-header-active');
      });
      e.classList.add('ui-accordion-header-active');

      if (!accordionBlock[i].classList.contains('accordion-block-active')) {
        accordionBlock.forEach(function (elem, j) {
          if (elem.classList.contains('accordion-block-active')) {
            elem.classList.remove('accordion-block-active');
            hideAccordeonFunction(j);
          }

          if (j == accordionBlock.length - 1) {
            accordionBlock[i].classList.add('accordion-block-active');
            showAccordeonSlideFunction(i);
          }
        });
      } else {
        accordionBlock[i].classList.remove('accordion-block-active');
        hideAccordeonFunction(i);
      }
    });
  });
}

module.exports = accordion;

/***/ }),

/***/ "./src/js/parts/burger.js":
/*!********************************!*\
  !*** ./src/js/parts/burger.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

function burger() {
  var btnBurger = document.querySelector('.burger'),
      menuBurger = document.querySelector('.burger-menu'),
      width = document.documentElement.clientWidth,
      logOpen = 0;

  function showBurger() {
    if (logOpen == 0) {
      menuBurger.style.display = 'block';
      logOpen = 1;
    } else {
      menuBurger.style.display = '';
      logOpen = 0;
    }
  }

  function isWidth() {
    if (width < 992) {
      btnBurger.addEventListener('click', showBurger);
    } else {
      menuBurger.style.display = '';
      logOpen = 0;
      btnBurger.removeEventListener('click', showBurger);
    }
  }

  isWidth();
  window.addEventListener('resize', function () {
    width = document.documentElement.clientWidth;
    isWidth();
  });
}

module.exports = burger;

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

      if (options.options.selectedIndex > 0) {
        price = price + optionsPrices[options.options.selectedIndex];
      }

      if (promocode.value == 'IWANTPOPART') {
        price = price * 0.7;
      }

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
    var sliderAnimation = setInterval(function () {
      left = left + 10;

      if (slideIndex - preventSlide == 1 || preventSlide == slides.length && slideIndex == 1) {
        if (preventSlide == slides.length) {
          slides[slides.length - 1].style.left = left + 'px';
        } else {
          slides[slideIndex - 2].style.left = left + 'px';
        }

        slides[slideIndex - 1].style.left = -width + left + 'px';
      } else {
        slides[preventSlide - 1].style.left = -left + 'px';
        slides[slideIndex - 1].style.left = width - left + 'px';
      }

      if (left >= width) {
        preventSlide = slideIndex;
        clearInterval(sliderAnimation);
      }
    }, 3);
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
      var classN = e.className,
          log = 0;
      e.classList.add('active');
      portfolioBlock.forEach(function (elem) {
        if (!elem.classList.contains(classN)) {
          elem.style.display = 'none';
        } else {
          log = 1;
          elem.style.display = '';
        }
      });

      if (log == 0) {
        portfolioNo.style.display = 'block';
      } else {
        portfolioNo.style.display = '';
      }
    });
  });
}

module.exports = filter;

/***/ }),

/***/ "./src/js/parts/forms.js":
/*!*******************************!*\
  !*** ./src/js/parts/forms.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function forms() {
  function sendForm(e) {
    var form = e,
        statusMessage = document.createElement('div'),
        input = form.querySelectorAll('input'),
        textarea = form.querySelectorAll('textarea');
    statusMessage.classList.add('status-message');
    form.addEventListener('submit', function (event) {
      var innerCode;
      event.preventDefault();
      var tel = form.querySelector('input[name=phone]');

      function postData() {
        return new Promise(function (resolve, reject) {
          var request = new XMLHttpRequest(); // создаем запрос к серверу

          request.open('POST', 'server.php'); // выставляем настройки запроса

          request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
          var formData = new FormData(form); //получаем все данные с формы

          request.send(formData); // отправляем данные на сервер

          innerCode = form.innerHTML;
          form.innerHTML = '';
          form.appendChild(statusMessage);
          request.addEventListener('readystatechange', function () {
            // смотрим состояние запроса
            if (request.readyState < 4) {
              resolve();
            } else if (request.readyState == 4 && request.status == 200) {
              resolve();
            } else {
              reject();
            }
          });
        });
      }

      function clearInput() {
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
        }

        for (var _i = 0; _i < textarea.length; _i++) {
          textarea[_i].value = '';
        }
      }

      function closeForm(status) {
        statusMessage.innerHTML = status;
        var timeLog = 0;
        var closeFormTimer = setInterval(function () {
          timeLog = timeLog + 20;

          if (timeLog == 2000) {
            form.innerHTML = innerCode;
            clearInput();

            if (form.className.indexOf('popup') != -1) {
              var popupClass = document.querySelector('.' + form.className.slice(0, -5));
              popupClass.style.display = 'none';
              document.querySelector('body').style.overflow = '';
            }

            clearInterval(closeFormTimer);
          }
        }, 20);
      }

      if (tel.value.length != 17) {
        tel.style.border = '2px solid red';
      } else {
        tel.style.border = '';
        postData().then(function () {
          closeForm('<p>Идет отправка</p>');
        }).then(function () {
          closeForm('<p>Ваш запрос отправлен.<br>Наши менеджеры свжутся с вами.</p>');
        }).catch(function () {
          closeForm('<p>Произошла ошибка</p>');
        });
      }
    });
  }

  var form = document.querySelectorAll('form');
  form.forEach(function (e) {
    if (!e.classList.contains('calculator-form')) {
      sendForm(e);
    }
  });
}

module.exports = forms;

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
  var btns = document.querySelectorAll('button');
  var logFullScroll = 0;
  btns.forEach(function (e) {
    e.addEventListener('click', function () {
      logFullScroll = 1;
    });
  });

  function showGift() {
    btnGift.remove();
    popupGift.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
    logFullScroll = 1;
  }

  function hideGift() {
    popupGift.style.display = '';
    document.querySelector('body').style.overflow = '';
  }

  btnGift.addEventListener('click', function () {
    showGift();
  });
  popupGift.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      hideGift();
    }
  });
  btnClose.addEventListener('click', function () {
    hideGift();
  });
  window.addEventListener('scroll', function () {
    if (logFullScroll == 0 && window.scrollY >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
      showGift();
    }
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

/***/ "./src/js/parts/masks.js":
/*!*******************************!*\
  !*** ./src/js/parts/masks.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function masks() {
  var inputs = document.querySelectorAll('input'),
      textArea = document.querySelector('textarea');
  textArea.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^а-яё]/ig, '');
  });
  inputs.forEach(function (e) {
    if (e.getAttribute('name') == 'name' || e.getAttribute('name') == 'message') {
      e.addEventListener('input', function () {
        e.value = e.value.replace(/[^а-яё0-9 ,.\-:"()!?/%*]/ig, '');
      });
    }

    if (e.getAttribute('name') == 'phone') {
      var input = e,
          startL;
      input.addEventListener('input', function (e) {
        input.value = input.value.replace('+7 (', '');
        input.value = input.value.replace(') ', '');
        input.value = input.value.replace(')', '');
        input.value = input.value.replace('-', '');
        var s = input.value.slice(-1);
        var sn = +s;

        if (isNaN(sn) || s.charCodeAt(0) === 32) {
          input.value = input.value.slice(0, input.value.length - 1);
        } else if (e.data == null && startL == 3) {
          input.value = input.value.slice(0, input.value.length - 1);
        }

        startL = input.value.length;

        if (input.value.length < 3) {
          input.value = "+7 (".concat(input.value.slice(0, 3), ")");
          input.setSelectionRange(input.value.length - 1, input.value.length - 1);
        } else if (input.value.length == 3) {
          input.value = "+7 (".concat(input.value.slice(0, 3), ")");
        } else if (input.value.length > 3 && input.value.length < 7) {
          input.value = "+7 (".concat(input.value.slice(0, 3), ") ").concat(input.value.slice(3, 6));
        } else if (input.value.length > 6) {
          input.value = "+7 (".concat(input.value.slice(0, 3), ") ").concat(input.value.slice(3, 6), "-").concat(input.value.slice(6, 10));
        }
      });
    }
  });
}

module.exports = masks;

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

  function showOrder() {
    popupDesign.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
  }

  function hideOrder() {
    popupDesign.style.display = '';
    document.querySelector('body').style.overflow = '';
  }

  btnOrder.forEach(function (e) {
    e.addEventListener('click', function () {
      showOrder();
    });
  });
  popupDesign.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      hideOrder();
    }
  });
  popupClose.addEventListener('click', function () {
    hideOrder();
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
  var startTime = new Date();

  function showConsultation() {
    popupConsultation.style.display = 'block';
    document.querySelector('body').style.overflow = 'hidden';
  }

  function hideConsultation() {
    popupConsultation.style.display = '';
    document.querySelector('body').style.overflow = '';
  }

  btnConsultation.forEach(function (e) {
    e.addEventListener('click', function () {
      showConsultation();
    });
  });
  popupConsultation.addEventListener('click', function (e) {
    if (e.currentTarget == e.target) {
      hideConsultation();
    }
  });
  popupClose.addEventListener('click', function () {
    hideConsultation();
  });
  var userTimer = setInterval(function () {
    var time = Math.round((new Date() - startTime) / 1000);

    if (time > 60 && time < 62) {
      if (document.querySelector('body').style.overflow == '' || !document.querySelector('body').hasAttribute('style')) {
        showConsultation();
        clearInterval(userTimer);
      } else {
        clearInterval(userTimer);
      }
    }
  }, 1000);
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

  function showSize(p, img, i) {
    img.setAttribute('src', "img/sizes-".concat(i + 1, "-1.png"));
    p.forEach(function (e) {
      if (e.className != 'sizes-hit') {
        e.style.display = 'none';
      }
    });
  }

  function hideSize(p, img, i) {
    img.setAttribute('src', "img/sizes-".concat(i + 1, ".png"));
    p.forEach(function (e) {
      e.style.display = '';
    });
  }

  blockSizes.forEach(function (e, i) {
    var p = e.querySelectorAll('p'),
        img = e.querySelector('img');
    e.addEventListener('mouseover', function () {
      showSize(p, img, i);
    });
    e.addEventListener('mouseout', function () {
      hideSize(p, img, i);
    });
  });
  blockSizes.forEach(function (e, i) {
    var p = e.querySelectorAll('p'),
        img = e.querySelector('img');
    window.addEventListener('touchstart', function (elem) {
      if (elem.target == p[0] || elem.target == p[1] || elem.target == p[2] || elem.target == p[3] || elem.target == img) {
        showSize(p, img, i);
      } else {
        hideSize(p, img, i);
      }
    });
  });
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
      accordion = __webpack_require__(/*! ./parts/accordion.js */ "./src/js/parts/accordion.js"),
      burger = __webpack_require__(/*! ./parts/burger.js */ "./src/js/parts/burger.js"),
      forms = __webpack_require__(/*! ./parts/forms.js */ "./src/js/parts/forms.js"),
      masks = __webpack_require__(/*! ./parts/masks.js */ "./src/js/parts/masks.js");

  mainSlider();
  modalOrder();
  modalConsultation();
  gift();
  moreStyles();
  filter();
  calsulator();
  sizesBlock();
  feedbackSlider();
  accordion();
  burger();
  forms();
  masks();
});

/***/ })

/******/ });