import React, { useContext } from 'react'
import {UserNameContext} from '../Context/UserNameContext'
function SubSubUser() {

    const username = useContext(UserNameContext)
  return (
    <div>
        <h2>SubSubUser:{username}</h2>
    </div>
  )
}

export default SubSubUser