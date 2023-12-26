const Total = (props) => {
    const partsArray = props.parts

    // surely smarter way to do this using loop thing
    const total = partsArray[0].exercises + partsArray[1].exercises + partsArray[2].exercises

    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}

export default Total