const CountryList = ({ countries, search }) => {

  const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      {filteredCountries.map(country => <li key={country.name.common}>{country.name.common}</li>)}
    </div>
  )
}

export default CountryList