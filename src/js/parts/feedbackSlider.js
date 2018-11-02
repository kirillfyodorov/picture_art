function feedbackSlider() {
    let slideIndex = 1,
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

        let left = 0;
        slides[slideIndex - 1].style.left = '-100%';
        let sliderAnimation = setInterval(function () {
            left = left + 10;
            if (slideIndex - preventSlide == 1 || (preventSlide == slides.length && slideIndex == 1)) {
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
    prev.addEventListener('click', () => {
        clearInterval(feedbackSliderTimer);
        plusSlides(-1);
        feedbackSliderTimer = setInterval(feedbackSliderTimerFunction, 5000);
    });
    next.addEventListener('click', () => {
        clearInterval(feedbackSliderTimer);
        plusSlides(1);
        feedbackSliderTimer = setInterval(feedbackSliderTimerFunction, 5000);
    });

    let feedbackSliderTimer = setInterval(feedbackSliderTimerFunction, 5000);
}

module.exports = feedbackSlider;