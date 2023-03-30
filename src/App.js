import React from 'react'
import './App.css'
import User from './User/User'

export default class App extends React.Component {

    constructor(props){
        super(props)
    }



    render () {
        return (
            <div>
    
                <User></User>
    
            </div>
        )

    }
}
