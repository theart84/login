/**
 * Function input error template
 * @param msg
 * @return {string}
 */
function inputErrorTemplate(msg) {
  return `
    <div class="invalid-tooltip">${msg}</div>
  `;
}
/**
 * Function show error. Add input error.
 * @param {HTMLInputElement}
 */
export function showInputError(el) {
  const parent = el.parentElement;
  const msg = el.dataset.invalidMessage || 'Invalid input';
  const template = inputErrorTemplate(msg);
  el.classList.add('is-invalid');
  parent.insertAdjacentHTML('beforeend', template);
}

/**
 * Function remove error. Remove input error.
 * @param el
 */
export function removeInputError(el) {
  const parent = el.parentElement;
  const err = parent.querySelector('.invalid-tooltip');
  if (!err) return;

  el.classList.remove('is-invalid');
  parent.removeChild(err);
}

