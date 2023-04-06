import React ,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Products from './component/Products'


export default function App() {
        return (
          <>
          <Routes>
            <Route path='/' element={<h1>I am main route</h1>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/products' element={<Products></Products>}></Route>

          </Routes>
          </>
        )
}
