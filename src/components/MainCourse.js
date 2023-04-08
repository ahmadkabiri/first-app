import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import coursesData from "../CoursesData";

export default function MainCourse() {
  let params = useParams();

  console.log(params.courseID);

  let mainCourseData = coursesData.find(
    (course) => course.id == params.courseID
  );

  console.log(mainCourseData);

  return (
    <Container className="mt-5">
      <Row>
        <Col>
          <img
            src={mainCourseData.img}
            alt=""
            style={{ width: "300px", height: "120%" }}
          />
        </Col>
        <Col>
        <h2>{mainCourseData.title}</h2>
        <p>{mainCourseData.description}</p>
        </Col>
      </Row>
    </Container>
  );
}
