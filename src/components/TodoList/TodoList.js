import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        this.statusHandler = this.statusHandler.bind(this)
}


    todoTitleHandler (event) {

        this.setState({
            todoTitle : event.nativeEvent.target.value
    })

    }

    statusHandler (event) {
        this.setState({
            status : event.nativeEvent.target.value
        })
    }

    addTodo (event) {
        event.preventDefault()
        let newTodo = {
            completed : false ,
            id : this.state.todos.length + 1 ,
            title : this.state.todoTitle
        }

        this.setState((prevState) =>{
           return {todos : [...prevState.todos,newTodo],
        todoTitle : ""
        }
    })

    }

    editTodo (todoId) {

        let oldTodos = this.state.todos

        let index = this.state.todos.findIndex(todo => todo.id===todoId) ;


        oldTodos[index].completed = !oldTodos[index].completed

        this.setState({
            todos :oldTodos
        })

    }

    removeTodo (todoId) {
        let deletedTodoIndex = this.state.todos.findIndex(todo => todo.id === todoId)

        let oldTodos = this.state.todos

        oldTodos.splice(deletedTodoIndex,1)

        this.setState ( 
             {todos : oldTodos }
        )
    }


    render() {
        return (
            <>
                <Header />
                <form onSubmit={this.addTodo}>
                    <input type="text" className="todo-input" maxLength="40" onChange={this.todoTitleHandler} value={this.state.todoTitle}/>
                    <button className="todo-button" type="submit">
                        <i className="fas fa-plus-square"></i>
                    </button>
                    <div className="select">
                        <select name="todos" className="filter-todo" onChange={this.statusHandler}>
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.status === "completed" && this.state.todos.filter(todo => todo.completed).map(todo => (
                            <Todo key={todo.id} {...todo} onEdit={this.editTodo} onRemove={this.removeTodo}/>
                        ))}
                        {this.state.status === "uncompleted" && this.state.todos.filter(todo => !todo.completed).map(todo => (
                            <Todo key={todo.id} {...todo} onEdit={this.editTodo} onRemove={this.removeTodo}/>
                        ))}
                        {this.state.status === "all" && this.state.todos.map(todo => (
                            <Todo key={todo.id} {...todo} onEdit={this.editTodo} onRemove={this.removeTodo}/>
                        ))}
                     
                    </ul>
                </div>
            </>
        )
    }
}
