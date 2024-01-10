const Notification = ({ type, message }) => {
  const notificationStyle = {
    color: type === "error" ? "red" :
      type === "success" ? "green" :
        "grey",
    background: "lightgrey",
    fontSize: "20px",
    borderStyle: "solid",
    borderRadius: "5px",
    padding: "10px",
    marginBottom: "10px"
  }

  if (message === null) {
    return null
  }

  return (
    <div style={notificationStyle}>
      {message}
    </div>
  )
}

export default Notification