export function createCountryOptions(data) {
  const selectElement = document.querySelector('.country');

  const template = Object.entries(data).map(([index, country]) => {
    return `<option value="${country}" data-index-country="${index}">${country}</option>`
  }).join(' ');
  selectElement.firstElementChild.insertAdjacentHTML('afterend', template);
}

