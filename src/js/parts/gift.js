function gift() {
    let btnGift = document.querySelector('.fixed-gift'),
        popupGift = document.querySelector('.popup-gift'),
        btnClose = popupGift.querySelector('.popup-close');

    let btns = document.querySelectorAll('button');

    let logFullScroll = 0;
    btns.forEach(function(e) {
        e.addEventListener('click', function () {
            logFullScroll = 1;
        });
    });
    
    function showGift() {
        btnGift.remove();
        popupGift.style.display = 'block';
    }
    btnGift.addEventListener('click', function() {
        showGift();
    });
    popupGift.addEventListener('click', function (e) {
        if (e.currentTarget == e.target) {
            popupGift.style.display = '';
        }
    });
    btnClose.addEventListener('click', function() {
        popupGift.style.display = '';
    });

    window.addEventListener('scroll', () => {
        if (logFullScroll == 0 && window.scrollY >= document.documentElement.scrollHeight - document.documentElement.clientHeight) {
            showGift();
        }
    });
}

module.exports = gift;