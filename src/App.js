import React from 'react'
import {Routes, Route , useRoutes} from 'react-router-dom'
import Header from './components/Header'
import Courses from './components/Courses'
import MainCourse from './components/MainCourse'
import About from './components/About/About'
import { element } from 'prop-types'
import routes from './Routes'


export default function App() {

    // let router = useRoutes([
    //     {path : '/courses' , element : <Courses/>  } ,
    //     {path : '/course/:courseID' , element : <MainCourse/>  } ,
    //     {path : '/about/*' , element : <About/> , children :[
    //         {path:'setting' , element:<p style={{textAlign:"center"}}>Setting</p>},
    //         {path:'dashboard' , element:<p style={{textAlign:"center"}}>Dashboard</p>},
    //     ]}


    //   ])

    let router = useRoutes(routes)

    return (


        <>
        <Header />
        {/* <Routes>
            <Route path='/courses' element={<Courses />} />
            <Route path='/course/:courseID' element={<MainCourse></MainCourse>}></Route>
            <Route path='/about/*' element={<About></About>}>
        <Route path='setting' element={<p style={{textAlign:"center"}}>Setting</p>}></Route>
        <Route path='dashboard' element={<p style={{textAlign:"center"}}>Dashboard</p>}></Route>
            </Route>
        </Routes> */}

        {router}
        </>
    )
}
