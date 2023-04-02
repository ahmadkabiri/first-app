import React, { Component } from 'react'

export default class Todo extends Component {



    editHandler (id) {
        this.props.onEdit(id)
    }

    removeHandler (id) {
        this.props.onRemove(id)
    }


    
    render() {

        let {title , id , completed } = this.props

        return (
            // 'completed' class for completed todos
            <div className={completed ? "todo completed" : "todo"} style={{ display: 'flex' }}>
                <li className="todo-item ">{title}</li>

                <button className="check-btn" onClick={this.editHandler.bind(this,id)}>
                    <i className="fas fa-check" aria-hidden="true" ></i>
                </button>

                <button className="trash-btn" onClick={this.removeHandler.bind(this,id)}>
                    <i className="fas fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        )
    }
}