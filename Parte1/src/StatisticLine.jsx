const StatisticLine = ({value, name}) => {
    return (
        <tr>
            <td>{name} </td>
            <td> {value}</td>
        </tr>
    )
}
export default StatisticLine