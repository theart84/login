import axios from '../plugins/axios';

export async function getCities(country) {
  try {
    const response = await axios.get(`location/get-cities/${country}`);
    console.log(response)
    return response;
  } catch (e) {
    console.log(e)
    return Promise.reject(e);
  }
}