import React, { Component } from 'react'
import User from "./User"

export default class App extends Component {

    constructor (props) {
        super (props) 


        this.state ={
            users : [
                {id : 1 , name : "Mohmmad"},
                {id : 2 , name : "Amir"},
                {id : 3 , name : "Amin"},
                {id : 4 , name : "Ali"},

            ]
        }
        this.userRemoveHandler = this.userRemoveHandler.bind(this)


    } 

    userRemoveHandler (userId) {
        console.log(userId)
        let oldUsers = [...this.state.users]

        let mainUserIndex = oldUsers.findIndex((user) => (user.id===userId))

        oldUsers.splice(mainUserIndex,1)

        this.setState({
            users : oldUsers 
        })

    }


    render() {
        return (
            <div>
                {
                this.state.users.map(user=>{
                    return (<User key={user.id} {...user} onRemove={this.userRemoveHandler}/>)

                })}
            </div>
        )
    }
}
