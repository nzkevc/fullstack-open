const Part = (props) => {
    const part = props.part
    const noOfExercises = props.noOfExercises

    return (
        <div>
            <p>{part} {noOfExercises}</p>
        </div>
    )
}

export default Part