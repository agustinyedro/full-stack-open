import StatisticLine from './StatisticLine'

const Statistics = (props) => {
  
  const total = props.value + props.value1 + props.value2

  const averageScore = (props.value * 1 + props.value1 * 0 + props.value2 * -1) / total || 0

  const positivePercentage = (props.value / total) * 100 || 0
    
  if (total === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine value={props.value} name="good" />
        <StatisticLine value={props.value1} name="neutral" />
        <StatisticLine value={props.value2} name="bad" />
        <StatisticLine value={total} name="total" />
        <StatisticLine value={averageScore.toFixed(2)} name="average score" />
        <StatisticLine value={`${positivePercentage.toFixed(2)}%`} name="positive percentage" />
      </div>
    );
  }
};

export default Statistics