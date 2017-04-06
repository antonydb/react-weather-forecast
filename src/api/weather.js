import 'whatwg-fetch'
import { API_KEY } from '../../config'

const API_HOST = 'http://api.openweathermap.org/data/2.5/forecast/daily'

const buildQueryParams = (city, countryISOCode, numOfDays) => {
  const params = {
    q: `${city},${countryISOCode}`,
    cnt: numOfDays,
    APPID: API_KEY
  }

  return Object.keys(params)
    .map(key => key + '=' + encodeURIComponent(params[key]))
    .join('&')
}

const buildURL = (city, countryISOCode, numOfDays) => {
  const queryParams = buildQueryParams(city, countryISOCode, numOfDays)
  return `${API_HOST}?${queryParams}`
}

export const getDailyForecast = (city, countryISOCode, numOfDays) => {
  const url = buildURL(city, countryISOCode, numOfDays)

  return fetch(url)
    .then(response => response.json())
    .then(data => data.list)
}
