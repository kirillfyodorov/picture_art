function accordion() {
    let accordionHeading = document.querySelectorAll('.accordion-heading'),
    accordionBlock = document.querySelectorAll('.accordion-block');
    
    function showAccordeonSlideFunction(i) {
        let pt = 0,
        pb = 0,
        h = 0;
        let p = accordionBlock[i].querySelector('p');
        let showAccordeonSlide = setInterval(function () {
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
        let pt = 0,
        pb = 0,
        h = 0;
        let p = accordionBlock[i].querySelector('p');
        let hideAccordeonSlide = setInterval(function () {
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

    accordionHeading.forEach(function(e, i) {
        e.addEventListener('click', () => {
            accordionHeading.forEach(function(e) {
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