import { useEffect, useState } from 'react'
import countryService from './services/countries'

import CountryInput from './components/CountryInput'
import CountryItem from './components/CountryItem'
import CountryData from './components/CountryData'
import CountryResultPlaceholder from './components/CountryResultPlaceholder'

/*
  CountryInput - find countries <Input> shall include the onChange thing and be bound to a state
  CountryList component - needs a way to disappear when only one country
  CountryData component - Shall list all the country data given the thing 
*/

const App = () => {
  const [search, setSearch] = useState('')
  const [countryNames, setCountryNames] = useState([])
  const [filteredCountryNames, setFilteredCountryNames] = useState([])
  const [currentCountry, setCurrentCountry] = useState(null)


  useEffect(() => {
    countryService.getAllNames()
      .then(allCountryNames => {
        setCountryNames(allCountryNames)
        setFilteredCountryNames(allCountryNames)
      })
  }, [])


  const changeSearch = (event) => {
    setSearch(event.target.value)
    const currentFilter = countryNames.filter(country => country.toLowerCase().includes(event.target.value.toLowerCase()))
    setFilteredCountryNames(currentFilter)

    if (currentFilter.length > 1) {
      setCurrentCountry(null)
    } else if (currentFilter.length === 1) {
      if (currentCountry) {
        return
      }
      countryService.getCountry(currentFilter[0])
        .then(country => setCurrentCountry(country))
    }
  }

  // show country button
  const handleButtonClick = (countryName) => () => {
    countryService.getCountry(countryName)
      .then(country => setCurrentCountry(country))
  }

  return (
    <div>
      <CountryInput value={search} onChange={changeSearch} />
      <CountryResultPlaceholder baseNumber={countryNames.length} currentNumber={filteredCountryNames.length} />

      {filteredCountryNames.length < 11 && filteredCountryNames.length > 1 ?
        filteredCountryNames.map(countryName => {
          return (<CountryItem key={countryName} countryName={countryName} onButtonClick={handleButtonClick} />)
        }) : ''}

      <CountryData country={currentCountry} />
    </div>
  )
}

export default App
