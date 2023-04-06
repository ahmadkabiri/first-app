import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="/about">about</Link>
      <Link to="/products">products</Link>
      <Link to="/home">home</Link>
    </div>
  )
}
