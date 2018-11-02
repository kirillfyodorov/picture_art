window.addEventListener('DOMContentLoaded', function() {
    'use strict';
    let mainSlider = require('./parts/mainSlider.js'),
        modalOrder = require('./parts/modalOrder.js'),
        modalConsultation = require('./parts/modalСonsultation.js'),
        gift = require('./parts/gift.js'),
        moreStyles = require('./parts/moreStyles.js'),
        filter = require('./parts/filter.js'),
        calsulator = require('./parts/calsulator.js'),
        sizesBlock = require('./parts/sizesBlock.js'),
        feedbackSlider = require('./parts/feedbackSlider.js'),
        accordion = require('./parts/accordion.js');
        //forms = require('./parts/forms.js');

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
    //forms();
});