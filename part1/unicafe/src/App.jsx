import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import Content from './components/Content'

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

      <Header text='statistics' />
      <div>
        <Content text='good' number={good} />
        <Content text='neutral' number={neutral} />
        <Content text='bad' number={bad} />
        <Content text='all' number={good} />
        <Content text='average' number={good} />
        <Content text='positive' number={good} />

      </div>

    </div>
  )
}

export default App