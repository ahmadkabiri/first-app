import React from 'react'
import SubUser from './SubUser'
function User({username}) {
  return (
    <div>
        <h2>user:{username}</h2>
        <SubUser username={username}></SubUser>
    </div>
  )
}

export default User