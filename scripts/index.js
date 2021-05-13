let page = document.querySelector('.page');
let main = document.querySelector('.main');
let formSender = main.querySelector('.form-sender');
let post = main.querySelector('.post');

let formButton = post.querySelector('.form-sender__button');

let plusButton = post.querySelectorAll('.form-sender__plus-button');

let i = 1;
let num = 0;
let num1 = 0;
let num2 = 0;
const mails = [];
const mailsBottom = [];
const switchValue = [];
let out6 = "Да";
switchValue.push(` Наличие дна-№1: ${out6}`);


$(document).on("click", ".form-sender__switch_type_btn", function() {

    $(this).toggleClass('form-sender__switch_type_on');
    if ($(this).hasClass('form-sender__switch_type_on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});

//123gi
$(document)

$(document).on("click", ".form-sender__plus-button", function() {
    i = i + 1;
    formSender.insertAdjacentHTML('beforeend', `
    <h2 class="form-sender__title" style="text-align: center; margin-bottom: -40px; text-decoration: underline;">Колодец №:${i}</h2>
    <p class="form-sender__title" style="padding-top: 10px; border-top: 1px dotted green>Объект:</p>
    <input class="form-sender__input" type="text" name="OBJECT" placeholder="Колодец" value="" required>
    <p class="form-sender__title">Ширина:</p>
    <input class="form-sender__input" type="text" name="WIDTH" placeholder="1000см" value="" required>
    <p class="form-sender__title">Глубина:</p>
    <input class="form-sender__input" type="text" name="DEEP" placeholder="4321см" value="" required>
    <p class="form-sender__title">ДК/ПН:</p>
    <input class="form-sender__input_bottom" type="text" name="BOTTOM" placeholder="ДК" value="" required>`);
});

$(document).on('on.switch', function() {
    console.log('Кнопка переключена в состояние on');
    out6 = "Да";
    switchValue.splice(-1, 1, ` Наличие дна-№${i}:  ${out6}`);

});
$(document).on('off.switch', function() {
    console.log('Кнопка переключена в состояние off');
    out6 = "Нет"
    switchValue.splice(-1, 1, ` Наличие дна-№${i}:  ${out6}`);
});

let p = 0;

function plus(p) {
    p = p + 1;
    return p;
}

$(document).on("click", ".form-sender__button", function() {
    let formInput = formSender.querySelectorAll('.form-sender__input');
    let formTextarea = post.querySelector('.post__textarea');
    let textArea = formTextarea.value;
    let formInputBottom = formSender.querySelectorAll('.form-sender__input_bottom');

    for (elem of formInput) {
        mails.push(elem.value);
    }

    for (elem of formInputBottom) {
        mailsBottom.push(elem.value);
    }


    const fio = mails.slice(0, 1).map(el => `ФИО: ${el}`);
    const phone = mails.slice(1, 2).map(el => `Контактный телефон: ${el}`);
    const company = mails.slice(2, 3).map(el => `Название фирмы:  ${el}`);
    const bottom = mailsBottom.map(el => `  Тип-№${(num2 = num2 + 1)}: ${el}  `);

    const width = mails.filter(function(v, i) { if ((i % 2 != 0) && (i > 2)) return v; }).map(el => `  Диаметр-№${(num = num + 1)}: ${el} `);
    const deep = mails.filter(function(v, i) { if ((i % 2 === 0) && (i > 3)) return v; }).map(el => `  Глубина-№${(num1 = num1 + 1)}: ${el} `);

    console.log(fio + " " + phone + " " + company + " " + width + " " + deep);
    alert(`
    Количество колодцев: ${i}
    ${fio}
    ${ phone}
    ${company}

    ---Информация о заказе---

    ${width}

    ${deep}

    ${bottom}
    
    ---Примечание---
    ${textArea}`);

});