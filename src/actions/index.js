import axios from 'axios';

const API_KEY = '6d72056d25c0911e808f23bab9f546ee';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},eu&units=metric`;
  const request = axios.get(url);

  console.log('Request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
