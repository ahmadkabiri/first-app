import React from 'react' ;
import SubSubUser from './SubSubUser';
function SubUser({username}) {
  return (
    <div>
        <h2>
        SubUser{username}
        <SubSubUser username={username}></SubSubUser>
        </h2>
    </div>
  )
}

export default SubUser