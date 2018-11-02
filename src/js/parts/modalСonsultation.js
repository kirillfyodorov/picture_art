function modalConsultation() {
    let btnConsultation = document.querySelectorAll('.button-consultation'),
        popupConsultation = document.querySelector('.popup-consultation'),
        popupClose = popupConsultation.querySelector('.popup-close');
    let startTime = new Date();

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
    

    let userTimer = setInterval(function() {
        let time = Math.round((new Date() - startTime) / 1000);
        if (time > 60 && time < 62) {
            if ((document.querySelector('body').style.overflow == '' || !document.querySelector('body').hasAttribute('style'))) {
                showConsultation();
                clearInterval(userTimer);
            } else {
                clearInterval(userTimer);
            }
        }
        
    }, 1000);
}

module.exports = modalConsultation;