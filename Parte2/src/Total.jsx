const Total = ({parts}) => {
    const total = parts[0].exercises + parts[1].exercises + parts[2].exercises+ parts[3].exercises 
    return (
        <p><strong>
            Number of exercises {total}
            </strong>
        </p>
    )
}
export default Total