import axios from '../plugins/axios';

/**
 * Function login. Make login request to API.
 * @param {String} email
 * @param {String} password
 * @return {Promise<void>}
 */

export async function login(email, password) {
  try {
    const response = await axios.post(`/auth/login`, JSON.stringify({email, password}));
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
}