const showInputError = (classesList, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(classesList.inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(classesList.errorClass);
};

const hideInputError = (classesList, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(classesList.inputErrorClass);
    errorElement.classList.remove(classesList.errorClass);
    errorElement.textContent = '';
};

const checkInputValidity = (classesList, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(classesList, formElement, inputElement, inputElement.validationMessage);
    } else {
        hideInputError(classesList, formElement, inputElement);
    }
};

const setEventListeners = (classesList, formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(classesList.inputSelector));
    //let formButton = post.querySelector('.form-sender__button');

    toggleButtonState(classesList, inputList, formButton);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            checkInputValidity(classesList, formElement, inputElement);

            toggleButtonState(classesList, inputList, formButton);
        });
    });
};

const enableValidation = (classesList) => {
    const formList = Array.from(document.querySelectorAll(classesList.formSelector));
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', function(evt) {
            evt.preventDefault();
        });
        setEventListeners(classesList, formElement);
    });
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (classesList, inputList, formButton) => {
    if (hasInvalidInput(inputList)) {
        formButton.classList.add(classesList.inactiveButtonClass);
        formButton.disabled = true;
    } else {
        formButton.classList.remove(classesList.inactiveButtonClass);
        formButton.disabled = false;
    }
};

enableValidation({
    formSelector: '.form-sender',
    inputSelector: '.form-sender__input',
    submitButtonSelector: '.form-sender__button',
    inactiveButtonClass: 'form-sender__button_inactive',
    inputErrorClass: 'form-sender__input-error',
    errorClass: 'form-sender__input-error_type_active'
});

//6Lcr6-AaAAAAANjNl3dyAGzPvRwzvzGtte1TLv0V

//6Lcr6-AaAAAAACwBhHlVSTiPFBQ_Tts7yvC_0GVk

//plus form
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
    const showInputError = (classesList, formElement, inputElement, errorMessage) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.add(classesList.inputErrorClass);
        errorElement.textContent = errorMessage;
        errorElement.classList.add(classesList.errorClass);
    };

    const hideInputError = (classesList, formElement, inputElement) => {
        const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
        inputElement.classList.remove(classesList.inputErrorClass);
        errorElement.classList.remove(classesList.errorClass);
        errorElement.textContent = '';
    };

    const checkInputValidity = (classesList, formElement, inputElement) => {
        if (!inputElement.validity.valid) {
            showInputError(classesList, formElement, inputElement, inputElement.validationMessage);
        } else {
            hideInputError(classesList, formElement, inputElement);
        }
    };

    const setEventListeners = (classesList, formElement) => {
        const inputList = Array.from(formElement.querySelectorAll(classesList.inputSelector));
        //let formButton = post.querySelector('.form-sender__button');

        toggleButtonState(classesList, inputList, formButton);

        inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', function() {
                checkInputValidity(classesList, formElement, inputElement);

                toggleButtonState(classesList, inputList, formButton);
            });
        });
    };

    const enableValidation = (classesList) => {
        const formList = Array.from(document.querySelectorAll(classesList.formSelector));
        formList.forEach((formElement) => {
            formElement.addEventListener('submit', function(evt) {
                evt.preventDefault();
            });
            setEventListeners(classesList, formElement);
        });
    }

    const hasInvalidInput = (inputList) => {
        return inputList.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    const toggleButtonState = (classesList, inputList, formButton) => {
        if (hasInvalidInput(inputList)) {
            formButton.classList.add(classesList.inactiveButtonClass);
            formButton.disabled = true;
        } else {
            formButton.classList.remove(classesList.inactiveButtonClass);
            formButton.disabled = false;
        }
    };

    enableValidation({
        formSelector: '.form-sender',
        inputSelector: '.form-sender__input',
        submitButtonSelector: '.form-sender__button',
        inactiveButtonClass: 'form-sender__button_inactive',
        inputErrorClass: 'form-sender__input-error',
        errorClass: 'form-sender__input-error_type_active'
    });

});