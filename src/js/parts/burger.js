function burger() {
    let btnBurger = document.querySelector('.burger'),
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