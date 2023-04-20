import React,{useState} from "react";

function CourseHOC(OriginalComponent,courseTitle,coursePrice) {
  function NewComponent() {


    const [title,setTitle] = useState(courseTitle)
    const [price , setPrice] = useState(coursePrice)

    const increasePrice = () => {
        setPrice(prevPrice => prevPrice*2) ;
    }

    return(
        <OriginalComponent title={title} price={price} increasePrice={increasePrice}></OriginalComponent>
    )
  }

  return NewComponent
}

export default CourseHOC;
