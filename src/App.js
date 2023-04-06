import React ,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Products from './component/Products'
import Posts from './component/Posts'
import MainPost from './component/MainPost'


export default function App() {
        return (
          <>
          <Routes>
            <Route path='/posts' element={<Posts></Posts>}></Route>
            <Route path='/post/:id' element={<MainPost></MainPost>}></Route>
          </Routes>
          </>
        )
}
