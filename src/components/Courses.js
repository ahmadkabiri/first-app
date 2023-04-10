import React, { useState } from "react";
import CoursesData from "./../CoursesData";
import Course from "./Course";
import { useLocation } from "react-router-dom";

export default function Courses() {


  let location = useLocation()

  console.log(location)

  const [courses, setCourses] = useState(CoursesData);

  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", marginTop: 40 }}
    >
      {courses.map((course) => (
        <Course key={course.id} {...course}></Course>
      ))}
    </div>
  );
}
