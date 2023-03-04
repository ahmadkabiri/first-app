import React, { Component } from 'react'
import Shop from './components/Shop/Shop'
import './App.css'
import { Alert } from 'react-bootstrap'
import { Container, Row , Col , Button ,Modal } from 'react-bootstrap'
import Menus from './components/Menues/Menus'
export default class App extends Component {

    state = {
        showModal : true
    }

    render() {
        return (
            // <div>
            //     <Container>
            //         <Row>
            //             <Col xs={12} sm={6} md={4}>1</Col>
            //             <Col xs={12} sm={6} md={4}>2</Col>
            //             <Col xs={12} sm={6} md={4}>3</Col>

            //         </Row>
            //     </Container>
            // </div>

            <Container fluid>
                <Row>
                    <Menus></Menus>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}
