import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min';
import '../css/style.css';
import loginUI from "./config/loginUI";
import { registerUI, getGender, parseDate } from "./config/registerUI";
import { validate } from "./helpers/validate";
import { showInputError, removeInputError } from "./views/form";
import { login } from "./services/auth.service";
import { registration } from "./services/register.service";
import { notify, closeNotify } from "./views/notifications";
import { getNews } from "./services/news.service";
import { getCountries } from "./services/country.service";
import { createCountryOptions } from "./helpers/countries";
import { createCityOptions, findCitiesByCountries} from "./helpers/city";
import { getCities } from "./services/city.service";

const { form, inputEmail, inputPassword } = loginUI;
const inputs = [inputEmail, inputPassword];
const { formReg, inputRegEmail, inputRegPassword} = registerUI;
const inputsReg = [inputRegEmail, inputRegPassword];
const countrySelectElement = document.getElementById('registration-country');

//Events
document.addEventListener('DOMContentLoaded', () => {
  getCountries().then(response => createCountryOptions(response));
});

countrySelectElement.addEventListener('change', () => {
  const optionElement = findCitiesByCountries();
  getCities(optionElement).then(response => createCityOptions(response));
})

form.addEventListener('submit', (e) => {
  e.preventDefault();
  onSubmit()
});

formReg.addEventListener('submit', (e) => {
  e.preventDefault();
  onRegSubmit();
});

inputs.forEach((el) => {
  el.addEventListener('focus', () => {
    removeInputError(el);
  });
});

inputsReg.forEach((el) => {
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
  });

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

async function onRegSubmit() {
  const isValidRegForm = inputsReg.every((el) => {
    const isValidInput = validate(el);
    if (!isValidInput) {
      showInputError(el);
    }
    return isValidInput;
  });
  if (!isValidRegForm) {
    return;
  }
  const requestData = {
    email: registerUI.inputRegEmail.value,
    password: registerUI.inputRegPassword.value,
    nickname: registerUI.inputRegNickname.value,
    first_name: registerUI.inputRegFirstName.value,
    last_name: registerUI.inputRegLastName.value,
    phone: registerUI.inputRegPhone.value,
    gender_orientation: getGender(),
    city: registerUI.inputRegCity.value,
    country: registerUI.inputRegCountry.value,
    date_of_birth_day: +parseDate().day,
    date_of_birth_month: +parseDate().month,
    date_of_birth_year: +parseDate().year,
  }
  try {
    await registration(requestData);
  } catch (e) {
    notify({ msg: 'Registration failed', className: 'alert-danger' });
  }
}

