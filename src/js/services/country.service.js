import axios from '../plugins/axios';

export async function getCountries() {
  try {
    const response = await axios.get('location/get-countries');
    // console.log(response)
    return response;
  } catch (e) {
    console.log(e)
    return Promise.reject(e);
  }
}