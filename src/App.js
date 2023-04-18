import { useState, useRef, useEffect } from "react";
// import "./App.css";
export default function App() {
  const [title, setTitle] = useState("");
  const [rendersCount,setRendersCount] = useState(1)

  // const rendersCount = useRef(1) //{current:1}

  useEffect(() => {
    // rendersCount.current++
    // setRendersCount(prevCount => prevCount+1)
  })

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {/* <h3>input Value : {title} </h3> */}
      <h3>Renders Count : {rendersCount}</h3>
    </div>
  );
}
