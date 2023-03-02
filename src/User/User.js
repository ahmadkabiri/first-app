

import React, { Component } from 'react'

export default class User extends Component {

  
  removeMethod (id) {
    this.props.onRemove(id)
  }


  render() {
    return (
      <div>
        <h1 style={{color:"red" , cursor:"pointer" , fontSize : "10rem"}}>{this.props.name} <button onClick={this.removeMethod.bind(this,this.props.id)}>Remove</button></h1>
      </div>
    )
  }
}
