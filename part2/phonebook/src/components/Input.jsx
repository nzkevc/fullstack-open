const Input = ({ header, value, onChange }) => {

  return (
    <div>
      {header} <input value={value} onChange={onChange} />
    </div>
  )
}

export default Input