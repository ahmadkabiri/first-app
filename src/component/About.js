import React from 'react'
import { Link } from 'react-router-dom'

export default function About () {
  return (
    <div>
      <h1>About</h1>
      <Link to="/home">home</Link>
      <Link to="/contact">contact</Link>
      <Link to="/products">products</Link>
    </div>
  )
}
