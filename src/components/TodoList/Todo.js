import React, { Component } from 'react'

export default class Todo extends Component {

    constructor (props) {
        super(props)

        console.log('Todo.js => constructor');
        this.state = {
            todoId: null,
            todoCompleted: null,
            todoTitle: ''
        }
    }
    
    static getDerivedStateFromProps (props, state) {
        console.log('Todo.js => getDerivedStateFromProps', props, state);
        console.log('Todo.js => getDerivedStateFromProps');

        return {
            todoId: props.id,
            todoCompleted: props.completed,
            todoTitle: props.title
        }

        // this.setState({
        //     todoId: props.id,
        //     todoCompleted: props.completed,
        //     todoTitle: props.title
        // })
    }

    removeClickHandler (id) {
        this.props.onRemove(id)
    }

    editClickHandler (id) {
        this.props.onEdit(id)
    }

    componentDidMount () {
        console.log("App.js => componentDidMount")
    }

    render() {
        
        console.log("todo.js => render")


        return (
            // 'completed' class for completed todos
            <div className={`todo ${this.state.todoCompleted ? 'completed' : ''}`} style={{ display: 'flex' }}>
                <li className="todo-item">{this.state.todoTitle}</li>

                <button className="check-btn"  onClick={this.editClickHandler.bind(this, this.state.todoId)}>
                    <i className="fas fa-check" aria-hidden="true"></i>
                </button>

                <button className="trash-btn" onClick={this.removeClickHandler.bind(this, this.state.todoId)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}