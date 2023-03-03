import React, { Component } from 'react'
import Shop from './components/Shop/Shop'
import './App.css'
import { Alert } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'


export default class App extends Component {

    state = {
        showAlert : true
    }

    render() {
        return (
            <div>

                <Button variant="outline-danger" >Doctor Mohammad Mosadegh</Button>
                <hr />
                <Button variant="outline-success" size="lg">Doctor Mohammad Mosadegh</Button>
                <hr />
                <Button variant="outline-success" size="lg" disabled>Doctor Mohammad Mosadegh</Button>

            </div>
        )
    }
}
