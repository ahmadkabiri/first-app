import React ,{useState,useEffect} from 'react'
import {Routes,Route} from 'react-router-dom'
import Posts from './component/Posts'
import MainPost from './component/MainPost'
import NotFound from './component/NotFound'


export default function App() {
        return (
          <>
          <Routes>
            <Route path='/posts' element={<Posts></Posts>}></Route>
            <Route path='/post/:id' element={<MainPost></MainPost>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
          </Routes>
          </>
        )
}
