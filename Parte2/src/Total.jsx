const Total = ({parts}) => {
    const total = parts.reduce((s, part) => {
        const exercises =  part.exercises
        return s + exercises;
    }, 0);
    return (
        <p><strong>
            Number of exercises {total}
            </strong>
        </p>
    )
}
export default Total