const CountryItem = ({ country, onButtonClick }) => {

  return (
    <div>
      <li>{country} <button onClick={onButtonClick}>show</button></li>
    </div>
  )
}

export default CountryItem