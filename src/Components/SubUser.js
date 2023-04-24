import React, { useContext } from 'react' ;
import SubSubUser from './SubSubUser';
import {UserNameContext} from '../Context/UserNameContext';
function SubUser() {

    const username = useContext(UserNameContext)
  return (
    <div>
        <h2>
        SubUser{username}
        <SubSubUser></SubSubUser>
        </h2>
    </div>
  )
}

export default SubUser