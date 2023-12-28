const Button = ({ name, onClick }) => {
  return (
    <div style={{ display: 'inline-block' }}>
      <button onClick={onClick}>{name}</button>
    </div>
  )
}

export default Button