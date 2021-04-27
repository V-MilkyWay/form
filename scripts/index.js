let page = document.querySelector('.page');
let main = document.querySelector('.main');
let formSender = main.querySelector('.form-sender');
let formInput = formSender.querySelectorAll('.form-sender__input');

let formButton = formSender.querySelector('.form-sender__button');

let plusButton = formSender.querySelectorAll('.form-sender__plus-button');


function plus() {
    formSender.insertAdjacentHTML('beforeend', `<p class="form-sender__title" style="padding-top: 10px; border-top: 1px dotted green>Объект:</p>
    <input class="form-sender__input" type="text" name="OBJECT" placeholder="Колодец" value="">
    <p class="form-sender__title">Ширина:</p>
    <input class="form-sender__input" type="text" name="WIDTH" placeholder="1000см" value="">
    <p class="form-sender__title">Глубина:</p>
    <input class="form-sender__input" type="text" name="DEEP" placeholder="4321см" value="">
    <p class="form-sender__title">Наличие дна:</p>
    <div class="form-sender__switch_type_btn form-sender__switch_type_on"></div>
    <p class="form-sender__title">Примечание:</p>
    <textarea type="textarea" style="width: 234px; height: 230px; margin-top: -20px;" placeholder="Введите текст..." value=" " name="primechanie"></textarea>`);
};

formSender.addEventListener('click', plus);

function saveButton(evt) {
    evt.preventDefault();
    let out = formInput[0];
    out2 = formInput[1];
    out3 = formInput[2];
    out4 = formInput[3];
    out5 = formInput[4];
    out6 = formInput[5];

    alert(`
    Заказ: ${out.value}
    Контактный телефон: ${out2.value}
    Название фирмы: ${out3.value}

    ---Информация о заказе---
    Объект: ${out4.value}
    Ширина: ${out5.value}
    Глубина:${out6.value}`);
}


formSender.addEventListener('submit', saveButton);