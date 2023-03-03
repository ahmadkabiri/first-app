import React, { Component } from 'react'
import Shop from './components/Shop/Shop'
import './App.css'
import { Alert } from 'react-bootstrap'
import { Card , Button ,Modal } from 'react-bootstrap'

export default class App extends Component {

    state = {
        showModal : true
    }

    render() {
        return (
            <div>
                <Modal centered show={this.state.showModal} onHide={() => this.setState({showModal:false})}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => this.setState({showModal:false})}>Close</Button>
                        <Button variant="primary">Save changes</Button>
                    </Modal.Footer>
                </Modal>
                <Button onClick={() => this.setState({showModal:true})}>Reomve File</Button>
            </div>
        )
    }
}
