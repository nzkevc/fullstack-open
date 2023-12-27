const PercentageLine = ({ text, number }) => {
  return (
    // XXX: I wonder if you could refactor with reusing StatisticsLine
    <tr>
      <td>{text}</td>
      <td>{number * 100}</td>
      <td>%</td>
    </tr>
  )
}

export default PercentageLine