import { useEffect, useState } from 'react'
import countryService from './services/countries'

import CountryInput from './components/CountryInput'
import CountryList from './components/CountryList'

/*
  CountryInput - find countries <Input> shall include the onChange thing and be bound to a state
  CountryList component - needs a way to disappear when only one country
  CountryData component - Shall list all the country data given the thing 
*/

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    // TODO: kinda wish I could get only what's needed
    countryService.getAll()
      .then(allCountries => setCountries(allCountries))
  })

  const changeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <CountryInput value={search} onChange={changeSearch} />
      <CountryList countries={countries} search={search} />
    </div>
  )
}

export default App
