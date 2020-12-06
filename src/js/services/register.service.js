import axios from '../plugins/axios';

export async function registration(data) {
  try {
    const request = await axios.post('/auth/signup', JSON.stringify(data));
    console.log(request);
    return request;
  } catch (e) {
    console.log(e)
    return Promise.reject(e);
  }
}