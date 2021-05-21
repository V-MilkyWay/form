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