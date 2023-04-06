import React from 'react'
import { Link } from 'react-router-dom'


export default function Products() {
  return (
    <div>
      <h1>products</h1>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
      <Link to="/home">home</Link>
    </div>
  )
}
