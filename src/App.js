import React, { Component , useState } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'
import { Table , Container, Alert } from 'react-bootstrap'




export default function App () {
    
  return (
    <div>
        <TodoList></TodoList>
    </div>
  )
}
