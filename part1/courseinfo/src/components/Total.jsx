const Total = ({ parts }) => {

  const total = parts.reduce((sum, part) => {
    return (sum + part.exercises)
  }, 0)

  return (
    <div>
      <p><b>Total of {total} exercises</b></p>
    </div>
  )
}

export default Total