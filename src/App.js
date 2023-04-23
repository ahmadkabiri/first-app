import React, {
  useEffect,
  useState,
  useRef,
  useLayoutEffect,
  Profiler,
} from "react";
import "./App.css";
import User from "./Components/User";

function App() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Message></Message>
      <User></User>
    </div>
  );
}
const Message = () => {
  const [title, setTitle] = useState("");
  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
    </div>
  );
};

export default App;
