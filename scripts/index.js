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

$(document).on("click", ".form-sender__button_reset", function() {
    resetForm(formSender);
    window.location.reload();
});