function filter() {
    let portfolioWrapper = document.querySelector('.portfolio-wrapper'),
        portfolioBlock = portfolioWrapper.querySelectorAll('.portfolio-block'),
        portfolioMenu = document.querySelector('.portfolio-menu'),
        portfolioMenuItem = portfolioMenu.querySelectorAll('li'),
        portfolioNo = document.querySelector('.portfolio-no');
    
    portfolioMenuItem.forEach(function(e) {
        e.addEventListener('click', function() {
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