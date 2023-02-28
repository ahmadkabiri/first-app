import React from "react";
import User from './components/User/User' ;

export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      username :'' ,
      textareaValue : "" ,
      isLogin : false 
    }

    this.textareaHandler = this.textareaHandler.bind(this)

  }

  usernameHandler (event) {
    console.log(event)
    this.setState({
      username : event.nativeEvent.target.value
    })
  }

  textareaHandler (event) {
console.log(event)
this.setState ({
  textareaValue : event.nativeEvent.target.value
})
  }

  isLoginHandler (event) {
    console.log(event.nativeEvent.target.checked)
    this.setState({
      isLogin : event.nativeEvent.target.checked
    })
  }

  
  render() {
  
    return (
       <div>
        <h3>{this.state.username}</h3>
            <div><input type="text" value={this.state.username} onChange={this.usernameHandler.bind(this)}/></div>
            <div><textarea name="" id="" cols="30" rows="10" value={this.state.textareaValue} onChange={this.textareaHandler}></textarea></div>

            <h3>{this.state.username}</h3>
            <label htmlform = "login">Login</label>
            <div><input id="login" type="checkbox"  checked={this.state.isLogin} onChange={this.isLoginHandler.bind(this)}/></div>
            <div><textarea name="" id="" cols="30" rows="10" value={this.state.textareaValue} onChange={this.textareaHandler}></textarea></div>
       </div>
    )

  }
}



