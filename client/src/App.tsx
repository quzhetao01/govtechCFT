import { ChangeEventHandler, useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";
import Result from "./components/Result";
import "./App.css";

function App() {
  const [numbers, setNumbers] = useState({
    first: "",
    second: "",
  });

  const [result, setResult] = useState(0);

  const setFirstNumber: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNumbers((prev) => {
      return { ...prev, first: e.target.value };
    });
  };

  const setSecondNumber: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNumbers((prev) => {
      return { ...prev, second: e.target.value };
    });
  };

  return (
    <>
      <Result result={result} />
      <div className="container">
        <Input
          textValue={numbers.first}
          setNumber={setFirstNumber}
          type="first"
        />
        <Input
          textValue={numbers.second}
          setNumber={setSecondNumber}
          type="second"
        />
      </div>
      <div className="container">
        <Button name="Add" numbers={numbers} setResult={setResult} />
        <Button name="Subtract" numbers={numbers} setResult={setResult} />
      </div>
    </>
  );
}

export default App;
