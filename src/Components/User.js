import React from 'react'
import SubUser from './SubUser'
import { useContext } from 'react'
import UserNameContext from '../Context/UserNameContext'
function User() {

    const username = useContext(UserNameContext)
  return (
    <div>
        <h2>user:{username}</h2>
        <SubUser></SubUser>
    </div>
  )
}

export default User