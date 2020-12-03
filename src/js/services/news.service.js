import axios from '../plugins/axios';

export async function getNews() {
  try {
    const response = await axios.get(`/news`);
    console.log(response);
    return response;
  } catch (e) {
    console.log(e);
    return Promise.reject(e);
  }
}