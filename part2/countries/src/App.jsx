import { useEffect, useState } from 'react'
import countryService from './services/countries'

import CountryInput from './components/CountryInput'
import CountryItem from './components/CountryItem'
import CountryData from './components/CountryData'

/*
  CountryInput - find countries <Input> shall include the onChange thing and be bound to a state
  CountryList component - needs a way to disappear when only one country
  CountryData component - Shall list all the country data given the thing 
*/

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])
  const [filteredCountryNames, setFilteredCountryNames] = useState([])
  const [countryNames, setCountryNames] = useState([])


  useEffect(() => {
    // TODO: Leaning towards not getting all
    countryService.getAll()
      .then(allCountries => {
        setCountries(allCountries)
        setCountryNames(allCountries.map(country => country.name.common))
        setFilteredCountryNames(allCountries.map(country => country.name.common))
      })
  }, [])


  const changeSearch = (event) => {
    setSearch(event.target.value)
    setFilteredCountryNames(countryNames.filter(country => country.toLowerCase().includes(event.target.value.toLowerCase())))
  }

  // show country button
  const handleButtonClick = () => {
    console.log('Hello WORLD!!!!')
  }

  return (
    <div>
      <CountryInput value={search} onChange={changeSearch} />

      {filteredCountryNames.length === countryNames.length ? '' :
        filteredCountryNames.length === 1 ? <CountryData /> :
          filteredCountryNames.length > 10 ? 'Too many matches, specify another filter' :
            filteredCountryNames.map(country => <CountryItem key={country} country={country} onButtonClick={handleButtonClick} />)
      }
    </div>
  )
}

export default App
