const CountryData = ({ country }) => {

  if (country) {
    return (
      <div>
        {country.name.official}
      </div>
    )
  }
}

export default CountryData