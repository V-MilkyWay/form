let page = document.querySelector('.page');
let main = document.querySelector('.main');
let formSender = main.querySelector('.form-sender');
let post = main.querySelector('.post');

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
let p = 0;

function plus(p) {
    p = p + 1;
    return p;
}
const mails = [];
$(document).on("click", ".form-sender__button", function() {
    let formInput = formSender.querySelectorAll('.form-sender__input');
    for (elem of formInput) {
        mails.push(elem.value);
    }


    const fio = mails.slice(0, 1).map(el => `ФИО: ${el}`);
    const phone = mails.slice(1, 2).map(el => `Контактный телефон: ${el}`);
    const company = mails.slice(2, 3).map(el => `Название фирмы:  ${el}`);
    let num;
    num = 0;
    let num1;
    num1 = 0;

    const width = mails.filter(function(v, i) { if ((i % 2 != 0) && (i > 2)) return v; }).map(el => `  Ширина№${(num = num + 1)}: ${el}  `);
    const deep = mails.filter(function(v, i) { if ((i % 2 === 0) && (i > 3)) return v; }).map(el => `  Глубина№${(num1 = num1 + 1)}: ${el}  `);

    console.log(fio + " " + phone + " " + company + " " + width + " " + deep);
    alert(`
    Заказ №: ${i}
    ${fio}
    ${ phone}
    ${company}

    ---Информация о заказе---

    ${width}

    ${deep}
    
    Наличие дна: ${out6}`);
    /*
                let out = mails[0];
                out2 = mails[1];
                out3 = mails[2];
                out4 = mails[3];
                out5 = mails[4];

                let result = [`
                    Заказ №: ${i}
                    ФИО: ${out}
                    Контактный телефон: ${out2}
                    Название фирмы: ${out3}

                    ---Информация о заказе---
                    Ширина: ${out4}
                    Глубина: ${out5}
                    Наличие дна: ${out6}`]

                alert(result);
*/
});