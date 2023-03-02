import React, { Component } from 'react'
import User from './User/User'

export default class App extends Component {
    constructor (props){
        super(props)

        this.state = {
            users : [
                {id:1 , name:"Mohmmad" },
                {id:2 , name:"Amir" },
                {id:3 , name:"Ali" },
                {id:4 , name:"Amin" },

            ]
        }
    }

    userRemoveHandler (userId) {


        let newUsers = [...this.state.users]
        
        let mainUserIndex = newUsers.findIndex(user => (
            user.id === userId
        ))
        
        newUsers.splice(mainUserIndex,1)
        console.log(newUsers)

        this.setState({
            users : newUsers
        })
    }
    render() {
        return (
            <div>
                {this.state.users.map(user => (
                    <User key={user.id} {...user} onRemove={this.userRemoveHandler.bind(this)}></User>
                ))}
            </div>
        )
    }
}
