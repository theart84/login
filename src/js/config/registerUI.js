export const registerUI = {
  formReg: document.forms['registrationForm'],
  inputRegEmail: document.getElementById('registration-email'),
  inputRegPassword: document.getElementById('registration-password'),
  inputRegNickname: document.getElementById('registration-nickname'),
  inputRegFirstName: document.getElementById('registration-firstName'),
  inputRegLastName: document.getElementById('registration-lastName'),
  inputRegPhone: document.getElementById('registration-phone'),
  inputRegGender: [...document.querySelectorAll('.form-check-input[name="inlineRadioOptions"]')],
  inputRegCity: document.getElementById('registration-city'),
  inputRegCountry: document.getElementById('registration-country'),
  inputRegBirthDay: document.getElementById('registration-birthday'),

};

export function getGender() {
  const radioBtn = [...document.querySelectorAll('.form-check-input[name="inlineRadioOptions"]')];
  if (radioBtn[0].checked) {
    return registerUI.inputRegGender = 'male';
  } else {
    return registerUI.inputRegGender = 'female';
  }

}
