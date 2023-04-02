import React, { Component } from 'react'


export default class User extends Component {





    removeMethod (id) {
        this.props.onRemove(id)
    }

  render() {
    console.log(this.props.onRemove)
    return (
      <div>
        <h1>{this.props.name} <button onClick={this.removeMethod.bind(this,this.props.id)}>Remove</button></h1>
      </div>
    )
  }
}
