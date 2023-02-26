import Header from "./Header/Header";
import Hero from "./Hero-Section/Hero";
import AboutUs from "./AboutUs/AboutUs";
import User from "./User";
import React from "react";


// class App extends React.Component{

//   constructor (props) {
//     super(props)
//     this.state =  {
//      users :  [
//       {id:1 , name:"Ali"},
//       {id:2 , name:"Amin"},
//       {id:3 , name:"Amir"},
//       {id:4 , name:"Babak"},
//     ],
//     scores : [23,21,90,83,29] ,

//     count : 0 ,
//     }
    
//     this.code = 25
//     this.clickHandler = this.clickHandler.bind(this)
//   }
  
//   clickHandler () {
//     this.code = 222
//     console.log(this) ;
//   }

//   keyDownHandler () {
//     console.log("Type Shod")

//   }


//   changeUsersHandler () {
    
//     setTimeout(() => {
//       // this.setState({
//       //   users :  [
//       //    {id:1 , name:"Qadir"},
//       //    {id:2 , name:"Sasan"},
//       //    {id:3 , name:"Mohmmad"},
//       //    {id:4 , name:"Ashkan"},
//       //  ]
//       //  })

      
//     }, 5000);
    
//     this.setState((prevState)=>{
//       return {count : prevState.count + 1}
//     })
//     console.log("ok")


//   }



//   render() {
//     return (
//       <div>
//         {this.code}
//         {/* <h1 onClick={this.clickHandler.bind(this)} >{this.code}</h1> */}

//         {/* <h1 onClick={()=>this.clickHandler()} >{this.code}</h1> */}

//         <h1 onClick={this.clickHandler} >{this.code}</h1>


//         <input type="text" onKeyDown = {this.keyDownHandler} />
//         <button onClick={this.changeUsersHandler.bind(this)}>Change Users</button>
//         <User {...this.state.users[0]} ></User>
//         <User {...this.state.users[1]} ></User>
//         <User {...this.state.users[2]} ></User>
//         <User {...this.state.users[3]} ></User>
//       </div>
//     )
//   }

// }



export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      count : 0 ,
    }

    this.addToCounter = this.addToCounter.bind(this)
    this.minusFromCounter = this.minusFromCounter.bind(this)

  }

  addToCounter () {
    this.setState((prevState)=>{
      return {count : prevState.count + 1}
    })
  }

  minusFromCounter () {
    this.setState((prevState)=>{
      return {count : prevState.count - 1}
    })
  }

  render() {
    return (
      <section id="main">
        <div className="container">
          <h2 id="title">Counter</h2>
          <h3 id="counter">{this.state.count}</h3>
          <div className="btn-container">
            <button id="add" onClick={this.addToCounter}>Add Count</button>
            <button id="lower" onClick={this.minusFromCounter}>Lower Count</button>
          </div>
        </div>
      </section>
    )
  }
}



