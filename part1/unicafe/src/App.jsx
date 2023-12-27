import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import StatisticsLine from './components/StatisticsLine'
import PercentageLine from './components/PercentageLine'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const getTotal = () => {
    return (good + neutral + bad)
  }

  return (
    <div>
      <Header text='give feedback' />
      {/* TODO make buttons inline */}
      <div>
        <Button name='good' onClick={() => setGood(good + 1)} />
        <Button name='neutral' onClick={() => setNeutral(neutral + 1)} />
        <Button name='bad' onClick={() => setBad(bad + 1)} />
      </div>

      <Header text='statistics' />
      <div>
        <StatisticsLine text='good' number={good} />
        <StatisticsLine text='neutral' number={neutral} />
        <StatisticsLine text='bad' number={bad} />
        <StatisticsLine text='all' number={getTotal()} />
        <StatisticsLine text='average' number={(good * 1 + bad * -1) / (getTotal())} />
        <PercentageLine text='positive' number={good / getTotal()} />

      </div>
    </div>
  )
}

export default App