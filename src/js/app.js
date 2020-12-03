import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../css/style.css';
import loginUI from "./config/loginUI";
import { registerUI, getGender } from "./config/registerUI";
import { validate } from "./helpers/validate";
import { showInputError, removeInputError } from "./views/form";
import { login } from "./services/auth.service";
import { notify, closeNotify } from "./views/notifications";
import {getNews} from "./services/news.service";

const { form, inputEmail, inputPassword } = loginUI;
const inputs = [inputEmail, inputPassword];
const { formReg, inputRegEmail, inputRegPassword} = registerUI;
const inputsReg = [inputRegEmail, inputRegPassword];
const inputRegGender = [...document.querySelectorAll('.form-check-input[name="inlineRadioOptions"]')]

//Events
form.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit()
});
formReg.addEventListener('submit', (e) => {
  e.preventDefault();
  onRegSubmit();
});
inputRegGender.forEach((el) => {
  el.addEventListener('click', () => {
    getGender();
    console.log(registerUI.inputRegGender)
    console.log(registerUI)
  });
});
inputs.forEach((el) => {
  el.addEventListener('focus', () => {
    removeInputError(el);
  });
});

//Handlers

async function onSubmit() {
  const isValidForm = inputs.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput
  })

  if (!isValidForm) {
    return;
  }
  try {
    await login(inputEmail.value, inputPassword.value);
    await getNews();
    notify({ msg: 'Login success', className: 'alert-success' });
    form.reset();
  } catch (e) {
    notify({ msg: 'Login failed', className: 'alert-danger' });
  }
}

function onRegSubmit() {
  console.log(registerUI)
}
