const CountryResultPlaceholder = ({ baseNumber, currentNumber }) => {

  if (currentNumber === baseNumber || currentNumber == 1) {
    return (<div></div>)
  } else if (currentNumber > 10) {
    return (<div>Too many matches, specify another filter</div>)
  }

}

export default CountryResultPlaceholder