import React , { useState } from "react"

function Reactjs() {

    const [title,setTitle] = useState('Reactjs Course')
    const [price , setPrice] = useState(2_200_000)

    const increasePrice = () => {
        setPrice(prevPrice => prevPrice * 2) ;
    }

  return (
    <div>
        <h3>Course Title : {title}</h3>
        <button onClick={increasePrice}>Increase Course Price (price={price})</button>
    </div>
  )
}

export default Reactjs