function forms() {
    function sendForm(e) {
        let form = e,
            statusMessage = document.createElement('div');
        statusMessage.classList.add('status-message');

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            let tel = form.querySelector('input[name=phone]');

            function postData() {
                
                return new Promise(function (resolve, reject) {
                    let request = new XMLHttpRequest(); // создаем запрос к серверу
                    request.open('POST', 'server.php'); // выставляем настройки запроса
                    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    let formData = new FormData(form); //получаем все данные с формы
                    request.send(formData); // отправляем данные на сервер
                    form.innerHTML = '';
                    form.appendChild(statusMessage);
                    request.addEventListener('readystatechange', function () { // смотрим состояние запроса
                        if (request.readyState < 4) {
                            resolve();
                        } else if (request.readyState == 4 && request.status == 200) {
                            resolve();
                        } else {
                            reject();
                        }
                    });
                });
            }

            // function clearInput() {
            //     for (let i = 0; i < input.length; i++) {
            //         input[i].value = '';
            //     }
            // }
            if (tel.value.length != 17) {
                tel.style.border = '2px solid red';
            } else {
                tel.style.border = '';
                postData()
                    .then(() => {
                        statusMessage.innerHTML = '<p>Идет отправка</p>';
                    })
                    .then(() => {
                        statusMessage.innerHTML = '<p>Ваш запрос отправлен.<br>Наши менеджеры свжутся с вами.</p>';
                    })
                    .catch(() => {
                        statusMessage.innerHTML = '<p>Произошла ошибка</p>';
                    });
            }
        });
    }
    let form = document.querySelectorAll('form');
    form.forEach(function(e) {
        if (!e.classList.contains('calculator-form')) {
            sendForm(e);
        }
    });

}

module.exports = forms;