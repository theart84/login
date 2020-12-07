import axios from '../plugins/axios';

export async function getCities(country) {
  try {
    const response = await axios.get(`location/get-cities/${country}`);
    return response;
  } catch (e) {
    return Promise.reject(e);
  }
}