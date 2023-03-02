import React, { Component } from 'react'
import Book from './Book'

export default class AddForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            books: [],

            title: '',
            author: '',
            year: '',
        }
        this.formSumbmitHandler = this.formSumbmitHandler.bind(this)

        this.titleInputHandler = this.titleInputHandler.bind(this)
        this.authorInputHandler = this.authorInputHandler.bind(this)
        this.yearInputHandler = this.yearInputHandler.bind(this)

    }


    // اصلا دهنم کف کرد چقدر این لامصب خوبه باریکلا باریکلااااااااااااااااااا

    formSumbmitHandler (event) {
        event.preventDefault()

        let {title , author , year} = this.state
        if( title && author && year) { 
            let newBook = {
                id:this.state.books.length+1 ,
                title,
                author,
                year
            }



        this.setState({

            books : [...this.state.books ,newBook],

            title:"" ,
            author:'',
            year:''
        })
    }
    }


    titleInputHandler (event) {
        this.setState({
            title : event.nativeEvent.target.value
        }) 
    }

    authorInputHandler (event) {
        this.setState({
            author : event.nativeEvent.target.value
        })
    }

    yearInputHandler (event) {
        this.setState({
            year : event.nativeEvent.target.value
        })
    }



    render() {
        return (
            <>
                <form id="book-form" autoComplete="off" onSubmit={this.formSumbmitHandler}>
                    <div className="form-group">
                        <label form="title">Title</label>
                        <input type="text" id="title" className="form-control" value={this.state.title} onChange={this.titleInputHandler} />
                    </div>

                    <div className="form-group">
                        <label form="author">Author</label>
                        <input type="text" id="author" className="form-control"  value={this.state.author} onChange={this.authorInputHandler} />
                    </div>

                    <div className="form-group">
                        <label form="year">Year</label>
                        <input type="text" id="year" className="form-control"  value={this.state.year} onChange={this.yearInputHandler} />
                    </div>
                    <input type="submit" value="Add Book" className="btn btn-warning btn-block add-btn" />
                </form>
                <table className="table table-striped mt-5 text-center">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Year</th>
                        </tr>
                    </thead>
                    <tbody id="book-list">
                        {this.state.books.map(book=>(
                            <Book key={book.id} {...book} ></Book>
                        ))}
                        <Book  />
                    </tbody>
                </table>


            </>
        )
    }
}
