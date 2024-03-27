const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => (
                <p>{part.parte} {part.exercises}</p>
            ))}
        </div>
    )
}

export default Content