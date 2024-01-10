import { useEffect, useState } from 'react'
import axios from 'axios'

import CountryInput from './components/CountryInput'

/*
  CountryInput - find countries <Input
    shall include the onChange thing and be bound to a state

  CountryList component - needs a way to disappear when only one country

  CountryData component - Shall list all the country data given the thing 
*/

const App = () => {
  const [search, setSearch] = useState('')

  // useEffect(() => {
  //   axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
  // })

  const changeSearch = (event) => {
    setSearch(event.target.value)
  }

  return (
    <div>
      <CountryInput value={search} onChange={changeSearch} />
    </div>
  )
}

export default App
