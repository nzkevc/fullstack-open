import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      {/* TODO make buttons inline */}
      <div>
        <Button name='good' onClick={() => setGood(good + 1)} />
        <Button name='neutral' onClick={() => setNeutral(neutral + 1)} />
        <Button name='bad' onClick={() => setBad(bad + 1)} />
      </div>

      <Statistics statArray={[good, neutral, bad]} />
    </div>
  )
}

export default App