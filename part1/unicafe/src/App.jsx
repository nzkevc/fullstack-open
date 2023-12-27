import { useState } from 'react'
import Header from './components/Header'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />

      <Header text='statistics' />

    </div>
  )
}

export default App