import React, { Component } from 'react'
import Shop from './components/Shop/Shop'
import './App.css'
import { Alert } from 'react-bootstrap'
import { Card , Button } from 'react-bootstrap'

export default class App extends Component {

    state = {
        showAlert : true
    }

    render() {
        return (
            <div className='container mt-5'>
                <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="Images/parsnaz.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            آیا میخواهید سیبیل پر پشت تری داشته باشید؟
        </Card.Text>
        <Button variant="success">دکمتو بزن</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="Images/parsnaz.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            آیا میخواهید سیبیل پر پشت تری داشته باشید؟
        </Card.Text>
        <Button variant="success">دکمتو بزن</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="Images/parsnaz.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            آیا میخواهید سیبیل پر پشت تری داشته باشید؟
        </Card.Text>
        <Button variant="success">دکمتو بزن</Button>
      </Card.Body>
    </Card>
            </div>
        )
    }
}
