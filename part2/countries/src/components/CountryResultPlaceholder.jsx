const CountryResultPlaceholder = ({ baseNumber, currentNumber }) => {

  if (currentNumber === baseNumber || currentNumber === 1) {
    return (<div></div>)
  } else if (currentNumber > 10) {
    return (<div>Too many matches, specify another filter</div>)
  } else if (currentNumber === 0) {
    return (<div>No matches found.</div>)
  }

}

export default CountryResultPlaceholder