import Header from "./Header"
import StatisticsLine from "./StatisticsLine"
import PercentageLine from "./PercentageLine"

const Statistics = ({ statArray }) => {
  // Does this work?
  const [good, neutral, bad] = statArray

  const getTotal = () => {
    return (good + neutral + bad)
  }

  return (
    <div>
      <Header text='statistics' />
      <div>
        <StatisticsLine text='good' number={good} />
        <StatisticsLine text='neutral' number={neutral} />
        <StatisticsLine text='bad' number={bad} />
        <StatisticsLine text='all' number={getTotal()} />
        <StatisticsLine text='average' number={(good * 1 + bad * -1) / (getTotal())} />
        {/* TODO: fix rounding issues? */}
        <PercentageLine text='positive' number={good / getTotal()} />
      </div>
    </div>
  )
}

export default Statistics