function calsulator() {
    let size = document.querySelector('#size'),
        material = document.querySelector('#material'),
        options = document.querySelector('#options'),
        promocode = document.querySelector('.promocode'),
        priceInput = document.querySelector('.calc-price');

    let sizePrices = {
            1: 500,
            2: 1000,
            3: 1500,
            4: 2000
        },
        materialPrices = {
            1: 500,
            2: 1000,
            3: 1500
        },
        optionsPrices = {
            1: 500,
            2: 1000,
            3: 2000
        };
    
    function pricingChange() {
        if (size.options.selectedIndex > 0 && material.options.selectedIndex > 0) {
            let price = sizePrices[size.options.selectedIndex] + materialPrices[material.options.selectedIndex];
            if (options.options.selectedIndex > 0) {
                price = price + optionsPrices[options.options.selectedIndex];
            }
            if (promocode.value == 'IWANTPOPART') {
                price = price * 0.7;
            }
            priceInput.textContent = price;
        } else {
            priceInput.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
        }
    }
        
    size.addEventListener('change', () => {
        pricingChange();
    });
    material.addEventListener('change', () => {
        pricingChange();
    });
    options.addEventListener('change', () => {
        pricingChange();
    });
    promocode.addEventListener('input', function () {
        pricingChange();
    });
}

module.exports = calsulator;