import React, { Component } from 'react'
import  Alert  from 'react-bootstrap/Alert'
import  Button  from 'react-bootstrap/Button'


export default class App extends Component {

    render() {
        return (
            <div>
                <h1>Hello SabzLearn</h1>
                <Alert variant='secondary'> Your Wellcome <Alert.Link>Panel</Alert.Link> </Alert>
                <Button variant='danger'> Cancel</Button>
            </div>
        )
    }
}
