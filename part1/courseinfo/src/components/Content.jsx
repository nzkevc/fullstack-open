import Part from './Part'

const Content = (props) => {
    const partsArray = props.parts

    return (
        <div>
            <Part part={partsArray[0]} />
            <Part part={partsArray[1]} />
            <Part part={partsArray[2]} />
        </div>
    )
}

export default Content