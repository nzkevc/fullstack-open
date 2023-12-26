import Part from './Part'

const Content = (props) => {
    const partArray = props.partArray
    const noOfExercisesArray = props.noOfExercisesArray

    return (
        <div>
            <Part part={partArray[0]} noOfExercises={noOfExercisesArray[0]} />
            <Part part={partArray[1]} noOfExercises={noOfExercisesArray[1]} />
            <Part part={partArray[2]} noOfExercises={noOfExercisesArray[2]} />
        </div>
    )
}

export default Content