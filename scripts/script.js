const openPopup = document.querySelector('.button_call');
const editProfile = document.querySelector('.popup');
const closeEditor = editProfile.querySelector('.popup__close');
const editName = editProfile.querySelector('.popup__input_type_name');
const editPhone = editProfile.querySelector('.popup__input_type_phone');
const editEmail = editProfile.querySelector('.popup__input_type_email');
const addInfo = editProfile.querySelector('.popup__button');
const allOpenButtons = document.querySelectorAll('.content__button');

const formEdit = document.forms.editContent;


const validErrors = { 
    emptyField: 'Обязательное поле', 
    shortValue: 'Должно быть от 2 до 30 символов', 
    notPattern: 'Введите данные в необходимом формате' 
};


const formOne = document.querySelector('.one');
const formTwo = document.querySelector('.two');
const formThree = document.querySelector('.three')
const formFour = document.querySelector('.four')
const formFive = document.querySelector('.five')
const formSix = document.querySelector('.six')
const formSeven = document.querySelector('.seven')
const formEight = document.querySelector('.eight')
const formNine = document.querySelector('.nine')

const inputName = document.querySelector('.input01');
const inputPhone = document.querySelector('.input02');
const inputEmail = document.querySelector('.input03');
const inputName1 = document.querySelector('.input1');
const inputPhone1 = document.querySelector('.input2');
const inputEmail1 = document.querySelector('.input3');
const first = document.forms.first;
const second = document.forms.second;

function resetInputsCards() {
    editPhone.value = '';
    editName.value = '';
    editEmail.value = '';
}

function checkInputValidity(element) {
    if (element.tagName !== 'INPUT') return true;
    const valid = element.validity;
    if (valid.valid) {
        element.nextElementSibling.textContent = '';
        return true;
    } else if (valid.valueMissing) {
        element.nextElementSibling.textContent = validErrors.emptyField;
        return false;
    } else if (valid.tooShort) {
        element.nextElementSibling.textContent = validErrors.shortValue;
        return false;
    } else if (valid.patternMismatch) {
        element.nextElementSibling.textContent = validErrors.notPattern;
        return false;
    }
}

function setSubmitButtonState(form, isValid) {
    let formButton = null;
    [...form.elements].forEach((elem) => elem.tagName === 'BUTTON' ? formButton = elem : null);
    formButton.disabled = !isValid;
}

function sendToValidate(form) {
    let s = [...form.elements].reduce((timed, elem) => checkInputValidity(elem) && timed, true);
    setSubmitButtonState(form, s);
}

function resetErrors() {
    formOne.textContent = '';
    formTwo.textContent = '';
    formThree.textContent = '';
    formFour.textContent = '';
    formFive.textContent = '';
    formSix.textContent = '';
    formSeven.textContent = '';
    formEight.textContent = '';
    formNine.textContent = '';
}

function editPop() {
    editProfile.classList.toggle('popup_is-opened');
    sendToValidate(formEdit);
    resetErrors();
    resetInputsCards();
}

openPopup.addEventListener('click', editPop);
closeEditor.addEventListener('click', editPop);

editName.addEventListener('input', () => sendToValidate(formEdit));
editPhone.addEventListener('input', () => sendToValidate(formEdit));
editEmail.addEventListener('input', () => sendToValidate(formEdit));
inputName.addEventListener('input', () => sendToValidate(first));
inputPhone.addEventListener('input', () => sendToValidate(first));
inputEmail.addEventListener('input', () => sendToValidate(first));
inputName1.addEventListener('input', () => sendToValidate(second));
inputPhone1.addEventListener('input', () => sendToValidate(second));
inputEmail1.addEventListener('input', () => sendToValidate(second));


sendToValidate(first);
sendToValidate(second);
resetErrors();