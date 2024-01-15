const CountryData = ({ country }) => {

  if (country) {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>capital {country.capital}</p>
        <p>area {country.area}</p>

        <h3>Languages</h3>
        {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}

        <img src={country.flags.png} alt={country.flags.alt} />
      </div>
    )
  }
}

export default CountryData