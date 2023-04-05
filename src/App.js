import React ,{useState,useEffect} from 'react'
import Shop from './components/Shop/Shop'
import './App.css'
import User from "./User"

export default function App() {

    const [users, setUsers] = useState([
        {id:1 , name : "amin"},
        {id:2 , name : "amir"},
        {id:3 , name : "ali"},
        {id:4 , name : "babak"},

    ]) ;

    const removeHandler = (userID) => {
        setUsers(prevUsers => {
            let newUsers = prevUsers.filter(user=>{
                return user.id !== userID
            })
            return newUsers
        })
    }


  
    useEffect(()=>{
        console.log("component mount")
    },[]) 

    useEffect(()=>{
        console.log("component updated")
    },[users])
   

        return (
            <div>
                <ul>
                   {users.map(user =>{
                    return <User key={user.id} {...user} onRemove={removeHandler}></User>
                   })} 
                </ul>
            </div>
        )
    
}
