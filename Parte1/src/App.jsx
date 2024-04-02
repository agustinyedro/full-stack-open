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
    </div>
  );
};

export default App;
