
import React from 'react'
import "./User.css"



export default class User extends React.Component  {


  constructor (props) {
    super(props)

    this.state = {
      copmuterScore : 0 ,
      computerChoise : "",

      userScore : 0 ,
      userChoise :""

    }

    this.choises = {
      1 : "Rock" ,
      2 : "Paper" ,
      3 : "Scissors" 
    }

  }

  howIsWinner (event) {
    let userChoise = event.target.getAttribute('data-value')

    let generateRandomNumber = Math.floor(Math.random()*3)+1 ;
    let computerChoise = this.choises[generateRandomNumber]

    if((userChoise === "Rock" && computerChoise ==="Scissors") || (userChoise === "Paper" && computerChoise ==="Rock") || (userChoise === "Scissors" && computerChoise ==="Paper") || (computerChoise === "Scissors" && userChoise ==="Rock") || (computerChoise === "Rock" && userChoise ==="Paper") || (computerChoise === "Paper" && userChoise ==="Scissors")){

      this.setState((prevState)=>{
        return {userScore : prevState.userScore + 1 ,computerChoise,userChoise }
      })


    }else if (userChoise === computerChoise ) {
      this.setState({
        computerChoise,
        userChoise
      })
    }else{
      this.setState((prevState)=>{
        return {copmuterScore : prevState.copmuterScore + 1 ,computerChoise,userChoise }
      })
    }

  }


  render() {


  return (
    <div className='container'>
      <div className='fighters'>
        <div className='Computer'>Computer : {this.state.copmuterScore}</div>
        <div className='User'>User : {this.state.userScore}</div>
      </div>
      <div className='question-box'>
        <p>whats your choose?</p>
        <ul className='options'>
          <li className='option' data-value="Rock" onClick={this.howIsWinner.bind(this)}>Rock</li>
          <li className='option' data-value="Paper" onClick={this.howIsWinner.bind(this)}>Paper</li>
          <li className='option' data-value="Scissors" onClick={this.howIsWinner.bind(this)}>Scissors</li>
        </ul>
      </div>
      <div className='result'>
        انتخاب یوزر برابر هست با {this.state.userChoise}
        <hr />
        انتخاب کامپیوتر برابر هست با {this.state.computerChoise}
      </div>
    </div>
  )
  }

}

