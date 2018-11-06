function masks() {
    let inputs = document.querySelectorAll('input'),
        textArea = document.querySelector('textarea');

    textArea.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яё]/ig, '');
    });

    inputs.forEach(function(e) {
        if (e.getAttribute('name') == 'name' || e.getAttribute('name') == 'message') {
            e.addEventListener('input', () => {
                e.value = e.value.replace(/[^а-яё0-9 ,.\-:"()!?/%*]/ig, '');
            });
        }
        if (e.getAttribute('name') == 'phone') {
            let input = e,
                startL;
            input.addEventListener('input', (e) => {
                input.value = input.value.replace('+7 (', '');
                input.value = input.value.replace(') ', '');
                input.value = input.value.replace(')', '');
                input.value = input.value.replace('-', '');
                let s = input.value.slice(-1);
                let sn = +s;
                if ((isNaN(sn) || s.charCodeAt(0) === 32)) {
                    input.value = input.value.slice(0, input.value.length - 1);
                } else if (e.data == null && startL == 3) {
                    input.value = input.value.slice(0, input.value.length - 1);
                }
                startL = input.value.length;
                if (input.value.length < 3) {
                    input.value = `+7 (${input.value.slice(0, 3)})`;
                    input.setSelectionRange(input.value.length - 1, input.value.length - 1);
                } else if (input.value.length == 3) {
                    input.value = `+7 (${input.value.slice(0, 3)})`;
                } else if (input.value.length > 3 && input.value.length < 7) {
                    input.value = `+7 (${input.value.slice(0, 3)}) ${input.value.slice(3, 6)}`;
                } else if (input.value.length > 6) {
                    input.value = `+7 (${input.value.slice(0, 3)}) ${input.value.slice(3, 6)}-${input.value.slice(6,10)}`;
                }
            }); 
        }
    });
}

module.exports = masks;