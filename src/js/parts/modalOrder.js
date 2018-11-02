function modalOrder() {
    let btnOrder = document.querySelectorAll('.button-design'),
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

    btnOrder.forEach(function(e) {
        e.addEventListener('click', function () {
            showOrder();
        });
    });
    popupDesign.addEventListener('click', function(e) {
        if (e.currentTarget == e.target) {
            hideOrder();
        }
    });

    popupClose.addEventListener('click', function () {
        hideOrder();
    });
}

module.exports = modalOrder;