const CountryList = ({ countryNames, search }) => {

  const filteredCountries = countryNames.filter(country => country.toLowerCase().includes(search.toLowerCase()))

  return (
    (filteredCountries.length === countryNames.length) || filteredCountries.length === 1 ? <div></div> :

      filteredCountries.length > 10 ? <div>Too many matches, specify another filter</div> :

        <div>{filteredCountries.map(country => <li key={country}>{country}</li>)}</div>
  )
}

export default CountryList