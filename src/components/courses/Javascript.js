import React , { useState } from "react"

function Javascript() {

    const [title,setTitle] = useState('JavaScript Expert')
    const [price , setPrice] = useState(2_000_000)

    const increasePrice = () => {
        setPrice(prevPrice => prevPrice*2) ;
    }

  return (
    <div>
        <h3>Course Title : {title}</h3>
        <button onClick={increasePrice}>Increase Course Price (price={price})</button>
    </div>
  )
}

export default Javascript