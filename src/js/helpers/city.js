export function findCitiesByCountries() {
  const countrySelectElement = document.getElementById('registration-country');
  const citySelectElement = document.getElementById('registration-city');
  const country = countrySelectElement.value;
  const optionElement = [...countrySelectElement.querySelectorAll('option')].find((el) => el.textContent === country).dataset.indexCountry;
  citySelectElement.innerHTML = '<option >Choose your city...</option>';
  citySelectElement.firstElementChild.textContent = 'Choose your city...';
  citySelectElement.removeAttribute('disabled');
  return optionElement;
}

export function createCityOptions(data) {
  const selectElement = document.getElementById('registration-city');
  const template = data.map((city) => {
    return `<option value="${city}"">${city}</option>`
  }).join(' ');
  selectElement.firstElementChild.insertAdjacentHTML('afterend', template);
}

