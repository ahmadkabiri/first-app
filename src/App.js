import { useState, useRef, useEffect } from "react";
// import "./App.css";
export default function App() {


  const [course,setCourse] = useState("js")

  const courseRef = useRef("npm")

 const chageState = () => {
  setCourse("React Js")
 }
 const changeReff = () => {
  courseRef.current = "vu js"
  console.log(courseRef)
 }

  return (
    <div>
      <h3>Course(state): {course}</h3>
      <hr />
      <h3>Course(Ref) : {courseRef.current}</h3>
      <button onClick={changeReff}>Upadate reff</button>
      <button onClick={chageState}>Update Course</button>
      {console.log(courseRef.current)}
    </div>
  );
}
