let page = document.querySelector('.page');
let main = document.querySelector('.main');
let formSender = main.querySelector('.form-sender');
let post = main.querySelector('.post');
let formInput = formSender.querySelectorAll('.form-sender__input');

let formButton = post.querySelector('.form-sender__button');

let plusButton = post.querySelectorAll('.form-sender__plus-button');



function plus() {
    formSender.insertAdjacentHTML('beforeend', `<p class="form-sender__title" style="padding-top: 10px; border-top: 1px dotted green>Объект:</p>
    <input class="form-sender__input" type="text" name="OBJECT" placeholder="Колодец" value="">
    <p class="form-sender__title">Ширина:</p>
    <input class="form-sender__input" type="text" name="WIDTH" placeholder="1000см" value="">
    <p class="form-sender__title">Глубина:</p>
    <input class="form-sender__input" type="text" name="DEEP" placeholder="4321см" value="">
    <p class="form-sender__title">Наличие дна:</p>
    <div class="form-sender__switch_type_btn form-sender__switch_type_on"></div>
    <p class="form-sender__title">Примечание:</p>`);
};

post.addEventListener('click', plus);

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


post.addEventListener('submit', saveButton);


$(document).on("click", ".form-sender__switch_type_btn", function() {

    $(this).toggleClass('form-sender__switch_type_on');
    if ($(this).hasClass('form-sender__switch_type_on')) {
        $(this).trigger('on.switch');
    } else {
        $(this).trigger('off.switch');
    }
});

$(document)

$(document).on('on.switch', function() {
    console.log('Кнопка переключена в состояние on');
});
$(document).on('off.switch', function() {
    console.log('Кнопка переключена в состояние off');
});