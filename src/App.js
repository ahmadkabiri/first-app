import Header from "./Header/Header";
import Hero from "./Hero-Section/Hero";
import AboutUs from "./AboutUs/AboutUs";
import User from "./User";
import React from "react";

import "./App.css"
class App extends React.Component {

constructor (props) {
  super(props)
  this.state = {
    users : [
      {id:1 , name:"Ali"},
      {id:2 , name:"Amin"},
      {id:3 , name:"Amir"},
      {id:4 , name:"Babak"},
    ]
  }


  setTimeout(() => {
    this.setState({
      users : [
        {id:1 , name:"Qadir"},
        {id:2 , name:"Sasan"},
        {id:3 , name:"Mohammad"},
        {id:4 , name:"Ashkan"},
      ]
    }) 
  },2500);

}
  render () {
    return (
      <div className="container">
        {/* <Header></Header>
        <Hero></Hero>
        <AboutUs></AboutUs> */}
        <User {...this.state.users[0]}></User>
        <User {...this.state.users[1]}></User>
        <User {...this.state.users[2]}></User>
        <User {...this.state.users[3]}></User>
      </div>
    );
  }
}

export default App;
