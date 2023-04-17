import { useState, useEffect, useMemo ,memo, useCallback } from "react";
// import "./App.css";
export default function App() {
  const [counter, setCounter] = useState(0);

  const [title, setTitle] = useState("");

  console.log("App run")

  const addCounter = useCallback(() => {
    setCounter((prevCount) => prevCount + 1);
  },[counter]);

  const minusCounter =useCallback(() => {
    setCounter((prevCount) => prevCount - 1);
  },[counter]);

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <Title title={title}></Title>
      <h3>{counter}</h3>
      <Buttons add={addCounter} minus={minusCounter}></Buttons>
    </div>
  );
}

const Title =memo(({ title }) => {
  console.log("title run");
  return <h3>{title}</h3>;
});

const Buttons = memo(({ add, minus }) => {
  console.log("buttons run");

  return (
    <>
      <button onClick={add}>Add</button>
      <button onClick={minus}>Minus</button>
    </>
  );
});
