const Total = (props) => {
  const partsArray = props.parts

  // TODO: surely smarter way to do this using loop thing
  const total = partsArray[0].exercises + partsArray[1].exercises + partsArray[2].exercises

  return (
    <div>
      <p><b>Total of {total} exercises</b></p>
    </div>
  )
}

export default Total