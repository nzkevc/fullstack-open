const CountryItem = ({ countryName, onButtonClick }) => {

  return (
    <div>
      <li>{countryName} <button onClick={onButtonClick(countryName)}>show</button></li>
    </div>
  )
}

export default CountryItem