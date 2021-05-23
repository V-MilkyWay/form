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
            const bottom = mailsBottom.map(el => `
    Тип: ${el}  `);


            const width = mails.filter(function(v, i) { if ((i % 2 != 0) && (i > 2)) return v; }).map(el => `
    Заказ-№${(num2 = num2 + 1)}
    Диаметр: ${el} `);
            const deep = mails.filter(function(v, i) { if ((i % 2 === 0) && (i > 3)) return v; }).map(el => `
    Глубина: ${el} `);



            let result = width.map((elem, index) => `${elem}, ${deep[index]}, ${bottom[index]} `);

            resetForm(formSender);
            openPopup(popupEditProfile);
            $.ajax({
                type: "POST",
                url: "wdh_send_form.php",
                data: $("#wdh_form").serialize(),
                success: function(data) {
                    $("#wdh_result_form").html(data);
                }
            });
            alert(`
    Количество колодцев: ${i}
    ${fio}
    ${ phone}
    ${company}
    ---Информация о заказе---
    ${result.join(`
    -------------------------`)}
    ---Примечание---
    ${textArea}`)
});

////////////

////////////
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