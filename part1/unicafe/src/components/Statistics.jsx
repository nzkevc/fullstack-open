import Header from "./Header"
import StatisticsLine from "./StatisticsLine"
import PercentageLine from "./PercentageLine"

const Statistics = ({ statArray }) => {
  // Does this work?
  const [good, neutral, bad] = statArray

  const getTotal = () => {
    return (good + neutral + bad)
  }

  if (getTotal() === 0) {
    // XXX: uh what happens if you only want to render a CERTAIN PART differently, rather than the whole thing?
    // more component extraction?
    return (
      <div>
        {/* Not sure if I should do header in both or not */}
        <Header text='statistics' />
        <p>no feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <Header text='statistics' />
      <div>
        <table>
          <tbody>
            <StatisticsLine text='good' number={good} />
            <StatisticsLine text='neutral' number={neutral} />
            <StatisticsLine text='bad' number={bad} />
            <StatisticsLine text='all' number={getTotal()} />
            <StatisticsLine text='average' number={(good * 1 + bad * -1) / (getTotal())} />
            {/* TODO: fix rounding issues? */}
            <PercentageLine text='positive' number={good / getTotal()} />
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Statistics