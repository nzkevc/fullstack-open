const Part = (props) => {
    const part = props.part

    /* XXX: this feels like a hack and terrible solution because you'll probably forget the fields of the object
        once it has gone through two levels of nested components */
    return (
        <div>
            <p>{part.name} {part.exercises}</p>
        </div>
    )
}

export default Part