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

  this.code = 25 


  // setTimeout(() => {
  //   this.setState({
  //     users : [
  //       {id:1 , name:"Qadir"},
  //       {id:2 , name:"Sasan"},
  //       {id:3 , name:"Mohammad"},
  //       {id:4 , name:"Ashkan"},
  //     ]
  //   }) 
  // },2500);

  this.clickHandler = this.clickHandler.bind(this)

}
// این مربوط به فیلم 56 هست که دیس اندیفایند تشخیص داده شد.
// حالا توی جاوا اسکریپت اینجوری نبود ولی اینجا اینجوری شده . راه حلشم جلوش نوشتم.

// clickHandler () {
//   console.log(this)
//   this.code = 35 ;
// }

clickHandler () {
  console.log(this)
  this.code = 55 ;
}

keyDownHandler () {
  console.log("click shod")
}


  render () {
    return (
      <div className="container">
        {/* <Header></Header>
        <Hero></Hero>
        <AboutUs></AboutUs> */}
        {/* روش اول حل مساله */}
        <h1 onClick={this.clickHandler.bind(this)}>{this.code}</h1> 
        {/* روش دوم حل مساله   */}
        <h1 onClick={()=>this.clickHandler()}>{this.code}</h1>
        {/*   روش سوم حل مساله رفت بایند کرد البته توی خود کانستراکتور */}
        <h1 onClick={this.clickHandler}>{this.code}</h1>
        <input type="text" onKeyDown={this.keyDownHandler} />
        <User {...this.state.users[0]}></User>
        <User {...this.state.users[1]}></User>
        <User {...this.state.users[2]}></User>
        <User {...this.state.users[3]}></User>
      </div>
    );
  }
}

export default App;
