import React from "react";
import User from './components/User/User' ;

export default class App extends React.Component {


  state = {
    users : [
      {id:1 , name: "amin" , age : 22},
      {id:2 , name: "amir" , age : 19},
      {id:3 , name: "ali" , age : 23},
      {id:4 , name: "babak" , age : 29},
    ]
  }


  render() {
  
    return (
  <div>
    {this.state.users.map((user) => (
      <div key={user.id}>
        <User {...user}></User>
      </div>
    ) )}
  </div>
    )

  }
}



