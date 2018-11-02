function accordion() {
    let accordionHeading = document.querySelectorAll('.accordion-heading'),
    accordionBlock = document.querySelectorAll('.accordion-block');
    let pt = 0,
        pb = 0,
        h = 0;
    
    function showAccordeonSlideFunction(i) {
        let p = accordionBlock[i].querySelector('p');
        let showAccordeonSlide = setInterval(function () {
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
        let p = accordionBlock[i].querySelector('p');
        let hideAccordeonSlide = setInterval(function () {
            if (pt < 3) {
                pt += 0.1;
                accordionBlock[i].style.paddingTop = 3 -pt + 'rem';
            } else if (h < p.clientHeight) {
                h = h + 3;
                accordionBlock[i].style.height = p.clientHeight - h + 'px';
            } else if (pb < 3) {
                pb += 0.1;
                accordionBlock[i].style.paddingBottom = 3 -pb + 'rem';
            } else {
                clearInterval(hideAccordeonSlide);
            }
        }, 3);

    }

    accordionHeading.forEach(function(e, i) {
        e.classList.remove('ui-accordion-header-active');
        e.addEventListener('click', () => {
            e.classList.add('ui-accordion-header-active');
            accordionBlock.forEach(function(elem, j) {
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