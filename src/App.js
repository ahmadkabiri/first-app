import React, { Component } from 'react'
import Shop from './components/Shop/Shop'
import './App.css'
import { Alert } from 'react-bootstrap'
import { Container, Row , Col , Button ,Modal } from 'react-bootstrap'
import Menus from './components/Menues/Menus'
import RightSide from './components/RightSide/RightSide'
import LeftSide from './components/LeftSide/LeftSide'

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
                    <Col xs={12} md={6}>
                    <LeftSide>

                    </LeftSide>
                    </Col>
                    <Col xs={12} md={6}>
                    <RightSide></RightSide>
                    </Col>
                </Row>
            </Container>
        )
    }
}
