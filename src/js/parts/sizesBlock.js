function sizesBlock() {
    let blockSizes = document.querySelectorAll('.sizes-block');
    
    if (document.documentElement.clientWidth > 768) {
        blockSizes.forEach(function(e, i) {
            let p = e.querySelectorAll('p');
            e.addEventListener('mouseover', () => {
                e.querySelector('img').setAttribute('src', `img/sizes-${i+1}-1.png`);
                p.forEach(function(e) {
                    if (e.className != 'sizes-hit') {
                        e.style.display = 'none';
                    }
                });
            });
            e.addEventListener('mouseout', () => {
                e.querySelector('img').setAttribute('src', `img/sizes-${i+1}.png`);
                p.forEach(function (e) {
                    e.style.display = '';
                });
            });
        });
    } else {
        blockSizes.forEach(function (e, i) {
            let p = e.querySelectorAll('p'),
                img = e.querySelector('img');
            window.addEventListener('touchstart', (elem) => {
                if (elem.target == p[0] || elem.target == p[1] || elem.target == p[2] || elem.target == p[3] || elem.target == img) {
                    img.setAttribute('src', `img/sizes-${i+1}-1.png`);
                    p.forEach(function (e) {
                        if (e.className != 'sizes-hit') {
                            e.style.display = 'none';
                        }
                    });
                } else {
                    img.setAttribute('src', `img/sizes-${i+1}.png`);
                    p.forEach(function (e) {
                        e.style.display = '';
                    });
                }
                
            });
        });
    }
}

module.exports = sizesBlock;