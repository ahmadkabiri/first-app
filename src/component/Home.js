import React,{useEffect,useState} from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
      <Link to="/products">products</Link>
      {/* <Link to="/about">about</Link> */}

    </div>
  )
}
