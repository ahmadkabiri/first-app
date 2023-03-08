import React, { Component } from 'react'
import TodoList from './components/TodoList/TodoList'
import './App.css'
import { Table , Container, Alert } from 'react-bootstrap'
export default class App extends Component {

    // constructor (props) {
    //     super(props)

    //     console.log('App.js => constructor');

    //     this.state = {

    //     }
    // } 

    // static getDerivedStateFromProps () {
    //     console.log('App.js => getDerivedStateFromProps');
    // }

    // componentDidMount () {
    //     console.log("App.js => componentDidMount")
    // }

    // render() {
    //     console.log("App.js => render")
    //     return (
    //         <div>
    //             <TodoList></TodoList>
    //         </div>
    //     )
    // }

    constructor () {
        super()

        this.state = {
            posts : []
        }
    }

    componentDidMount () {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(data => this.setState({posts:data}) )
    }

    render () {
        return (
            <Container className='mt-5'>
                {this.state.posts.length > 0 ? (
                <Table striped bordered hover variant="dark">
                 <thead>
                    <tr>
                      <th>#</th>
                     <th>First Name</th>
                     <th>Last Name</th>
                     <th>Username</th>
                     </tr>
                 </thead>
                 <tbody>
                    {this.state.posts.map(post => (
                        <tr>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.body}</td>

                        </tr>
                    ))}
                 </tbody>
    </Table>
                ) : (
                    <Alert variant='info'>Loading... </Alert>
                )} 
            </Container>
        )
    }
}
