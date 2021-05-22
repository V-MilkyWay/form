let page = document.querySelector('.page');
let main = document.querySelector('.main');
let formSender = main.querySelector('.form-sender');
let post = main.querySelector('.post');

const popupEditProfile = page.querySelector('.popup_type_redact');
const redactContainer = popupEditProfile.querySelector('.popup__container');
const formEditProfile = redactContainer.querySelector('.form');
const closeEditProfilePopupBtn = redactContainer.querySelector('.popup__close-button');

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

function openPopup(popup) {
    popup.classList.add('popup_opened');
};

function closePopup(popup) {
    popup.classList.remove('popup_opened');
};



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
    /*
    $(document).on("click", ".form-sender__plus-button", function() {
        i = i + 1;
        formSender.insertAdjacentHTML('beforeend', `
        <h2 class="form-sender__title" style="text-align: center;margin-top: 25px; text-decoration: underline;">Колодец №:${i}</h2>
        <p class="form-sender__title">Диаметр(см):</p>
        <input id="WIDTH-input" class="form-sender__input" type="text" name="WIDTH" placeholder="1000" value="" required minlength="3" maxlength="10" pattern="[ 0-9]+$">
        <span class="form-sender__input-error WIDTH-input-error"></span>
        <p class="form-sender__title">Глубина(см):</p>
        <input id="DEEP-input" class="form-sender__input" type="text" name="DEEP" placeholder="4321" value="" required minlength="3" maxlength="10" pattern="[ 0-9]+$">
        <span class="form-sender__input-error DEEP-input-error"></span>
        <p class="form-sender__title">ДК/ПН:</p>
        <input id="BOTTOM-input" class="form-sender__input_bottom" type="text" name="BOTTOM" placeholder="ДК/ПН" value="" required minlength="2">
        <span class="form-sender__input-error BOTTOM-input-error"></span>`);

    }); */

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

    resetForm(formSender);
    openPopup(popupEditProfile);
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

closeEditProfilePopupBtn.addEventListener('click', function() {
    closePopup(popupEditProfile);
    window.location.reload();
});

function resetForm(nameForm) {
    nameForm.reset();
}

function formEditProfileSubmitHandler(evt) {
    evt.preventDefault();
    closePopup(popupEditProfile);
    window.location.reload();
    location.href = "https://b-pi.ru/";
};

formEditProfile.addEventListener('submit', formEditProfileSubmitHandler);