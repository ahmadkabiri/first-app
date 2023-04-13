import Home from "./pages/home/Home"
import UserList from './pages/Users/UserList'
import NewUser from './pages/NewUser/NewUser'
import Products from './pages/Products/Products'



let routes = [
    {path:'/' , element:<Home></Home>},
    {path:'/users' , element:<UserList></UserList>},
    {path:'/newUser' , element:<NewUser></NewUser>},
    {path:'/products' , element:<Products></Products>},
]


export default routes