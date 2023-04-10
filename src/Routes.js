import Course from "./components/Course"
import Courses from "./components/Courses"
import About from "./components/About/About"
import MainCourse from "./components/MainCourse"

let routes = [
    {path : '/courses' , element : <Courses/>  } ,
    {path : '/course/:courseID' , element : <MainCourse/>  } ,
    {path : '/about/*' , element : <About/> , children :[
        {path:'setting' , element:<p style={{textAlign:"center"}}>Setting</p>},
        {path:'dashboard' , element:<p style={{textAlign:"center"}}>Dashboard</p>},
    ]}


  ]

  export default routes