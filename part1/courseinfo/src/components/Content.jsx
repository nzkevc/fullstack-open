import Part from './Part'

const Content = (props) => {
    const partArray = props.partArray

    return (
        <div>
            <Part part={partArray[0]} />
            <Part part={partArray[1]} />
            <Part part={partArray[2]} />
        </div>
    )
}

export default Content