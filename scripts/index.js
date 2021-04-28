let page = document.querySelector('.page');
let main = document.querySelector('.main');
let formSender = main.querySelector('.form-sender');
let post = main.querySelector('.post');
let formInput = formSender.querySelectorAll('.form-sender__input');

let formButton = post.querySelector('.form-sender__button');

let plusButton = post.querySelectorAll('.form-sender__plus-button');

let i = 1;


$(document).on("click", ".form-sender__switch_type_btn", function() {

    $(this).toggleClass('form-sender__switch_type_on');
    if ($(this).hasClass('form-sender__switch_type_on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});

$(document)

let out6 = "Да";

$(document).on('on.switch', function() {
    console.log('Кнопка переключена в состояние on');
    out6 = "Да"
});
$(document).on('off.switch', function() {
    console.log('Кнопка переключена в состояние off');
    out6 = "Нет"
});

$(document).on("click", ".form-sender__plus-button", function() {
    i = i + 1;

    formSender.insertAdjacentHTML('beforeend', `
    <h2 class="form-sender__title" style="text-align: center; margin-bottom: -40px; text-decoration: underline;">Колодец №:${i}</h2>
    <p class="form-sender__title" style="padding-top: 10px; border-top: 1px dotted green>Объект:</p>
    <input class="form-sender__input" type="text" name="OBJECT" placeholder="Колодец" value="">
    <p class="form-sender__title">Ширина:</p>
    <input class="form-sender__input" type="text" name="WIDTH" placeholder="1000см" value="">
    <p class="form-sender__title">Глубина:</p>
    <input class="form-sender__input" type="text" name="DEEP" placeholder="4321см" value="">
    <p class="form-sender__title">Наличие дна:</p>
    <div class="form-sender__switch_type_btn form-sender__switch_type_on"></div>`);
});


$(document).on("click", ".form-sender__button", function() {
    let out = formInput[0];
    out2 = formInput[1];
    out3 = formInput[2];
    out4 = formInput[3];
    out5 = formInput[4];


    alert(`
    Заказ №: ${i}
    ФИО: ${out.value}
    Контактный телефон: ${out2.value}
    Название фирмы: ${out3.value}

    ---Информация о заказе---
    Ширина: ${out4.value}
    Глубина: ${out5.value}
    Наличие дна: ${out6}`);
});