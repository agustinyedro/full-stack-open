import { useState } from "react";
import Header from "./Header";
import Part from "./Part";
import Button from "./Button";

const App = () => {
  const course = "Give feedback";

  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setToGood = (newValue) => {
    console.log("good", newValue);
    setGood(newValue);
  };
  const setToNeutral = (newValue) => {
    console.log("neutral", newValue);
    setNeutral(newValue);
  };
  const setToBad = (newValue) => {
    console.log("bad", newValue);
    setBad(newValue);
  };

  const total = good + neutral + bad

  const averageScore = (good * 1 + neutral * 0 + bad * -1) / total || 0

  const positivePercentage = (good / total) * 100 || 0

  return (
    <div>
      <Header course={course} />
      <Button handleClick={() => setToGood(good + 1)} text="good" />
      <Button handleClick={() => setToNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setToBad(bad + 1)} text="bad" />
      <h1>Stadistics</h1>
      <br></br>
      <Part value={good} name="good" />
      <Part value={neutral} name="neutral" />
      <Part value={bad} name="bad" />
      <Part value={total} name="total" />
      <Part value={averageScore} name="average score" />
      <Part value={`${positivePercentage}%`} name="positive percentage" />
    </div>
  );
};

export default App;
