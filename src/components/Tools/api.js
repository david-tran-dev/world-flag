/* eslint-disable import/prefer-default-export */
import axios from 'axios';

export async function getDataFromAPI(url) {
  const countriesList = await axios.get(url);
  return countriesList.data;
}
