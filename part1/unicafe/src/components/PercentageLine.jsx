const PercentageLine = ({ text, number }) => {
    return (
        // XXX: I wonder if you could refactor with reusing StatisticsLine
        <div>
            <p>{text} {number * 100} %</p>
        </div>
    )
}

export default PercentageLine