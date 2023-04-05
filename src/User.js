import React from 'react'
import { useEffect } from 'react'

export default function User(props) {

    const clickHandler = (id) => {
        props.onRemove(id)
    }
    useEffect(()=>{
        console.log("component mount")

        return () =>{
            console.log("component unmount")
        }
    },[])


  return (
    <li>{props.name} <button onClick={() => clickHandler(props.id)}>Remove</button></li>
  )
}
