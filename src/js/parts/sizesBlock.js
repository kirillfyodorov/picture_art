function sizesBlock() {
    let blockSizes = document.querySelectorAll('.sizes-block');
    

    function showSize(p, img, i) {
        img.setAttribute('src', `img/sizes-${i+1}-1.png`);
        p.forEach(function (e) {
            if (e.className != 'sizes-hit') {
                e.style.display = 'none';
            }
        });
    }
    function hideSize(p, img, i) {
        img.setAttribute('src', `img/sizes-${i+1}.png`);
        p.forEach(function (e) {
            e.style.display = '';
        });
    }

    blockSizes.forEach(function(e, i) {
        let p = e.querySelectorAll('p'),
            img = e.querySelector('img');
        e.addEventListener('mouseover', () => {
            showSize(p, img, i);
        });
        e.addEventListener('mouseout', () => {
            hideSize(p, img, i);
        });
    });

    blockSizes.forEach(function (e, i) {
        let p = e.querySelectorAll('p'),
            img = e.querySelector('img');
        window.addEventListener('touchstart', (elem) => {
            if (elem.target == p[0] || elem.target == p[1] || elem.target == p[2] || elem.target == p[3] || elem.target == img) {
                showSize(p, img, i);
            } else {
                hideSize(p, img, i);
            }
            
        });
    });
}

module.exports = sizesBlock;