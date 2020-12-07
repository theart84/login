import axios from '../plugins/axios';
import {notify} from "../views/notifications";

export async function registration(data) {
  try {
    const request = await axios.post('/auth/signup', JSON.stringify(data));
    if (request.error) {
      notify({ msg: request.message, className: 'alert-danger' });
    }
    return request;
  } catch (e) {
    if (e.response.data.error) {
      notify({ msg: e.response.data.message, className: 'alert-danger' });
    }
    return Promise.reject(e);
  }
}