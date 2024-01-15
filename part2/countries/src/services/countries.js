import axios from "axios";

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'

const getAllNames = () => {
  const request = axios.get(`${baseUrl}/all`)
  return request.then(response => response.data.map(country => country.name.common))
}

const getCountry = (country) => {
  const request = axios.get(`${baseUrl}/name/${country}`)
  return request.then(response => response.data)
}

export default { getAllNames, getCountry }