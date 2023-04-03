import React, { Component } from 'react'
import Note from './Note'
import ColorBox from './ColorBox'

export default class NoteApp extends Component {

    constructor(props) {
        super(props)

        this.state = {
            colors: [
                "#fff",
                "#FFD37F",
                "#FFFA81",
                "#D5FA80",
                "#78F87F",
                "#79FBD6",
                "#79FDFE",
                "#7AD6FD",
                "#7B84FC",
                "#D687FC",
                "#FF89FD",
            ],
            notes: [],
            noteTitle: '',
            inputColor: '#fff' ,
            id: 0
        }

        this.inputHandler = this.inputHandler.bind(this) ;
        this.changeInputColor = this.changeInputColor.bind(this) ;
        this.addNote = this.addNote.bind(this) ;
        this.removeNotes = this.removeNotes.bind(this) ; 
        this.eraseNotes = this.eraseNotes.bind(this)

    }

    inputHandler (event) {
        this.setState({
            noteTitle : event.nativeEvent.target.value
        })
    }

    changeInputColor (inputColor) {
        this.setState({
            inputColor
        })
    }

    addNote () {

        let{inputColor , noteTitle , id} = this.state

        let newNote = { noteTitle , inputColor ,id } 

        this.setState(prevState=>{
            return {id : prevState.id + 1 ,
            notes : [...prevState.notes,newNote],
            noteTitle : "" ,
            inputColor:"#fff"
            }
        })

    }

    removeNotes (noteId) {
        let oldNotes = this.state.notes
        let index = oldNotes.findIndex(note=> note.id === noteId) ;
        oldNotes.splice(index,1) ;

        this.setState({
            notes : oldNotes 
        })
    }

    eraseNotes () {
        this.setState({
            notes : []
        })
    }



    render() {
        return (
            <>
                <div>
                    <section id="home">
                        <div className="container">
                            <div className="header upper">SabzLearn Note App</div>

                            <br /><br />
                            <div className="flex row-gt-sm">
                                <div className="flex flex-50-gt-sm">
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <input id="input-field" className="form-control" type="text" style={{ backgroundColor: this.state.inputColor }} placeholder="Something here..." onChange={this.inputHandler} value={this.state.noteTitle} />
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto">
                                        <div id='color-select'>
                                            {this.state.colors.map((color,index)=>(
                                                <ColorBox color={color} key={index} onColor={this.changeInputColor} />
                                            ))}
                                        </div>
                                    </div>
                                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mx-auto my-1 text-right">
                                        <button id="btn-save" type="button" className="btn btn-outline-info" onClick={this.addNote}><span className="fa fa-plus" ></span></button>
                                        <button id="btn-delete" type="button" className="btn btn-outline-danger" onClick={this.eraseNotes}><span id="btn-icon"
                                            className="fa fa-eraser"></span></button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex row-gt-sm">

                                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="container">
                                        <div className="row">
                                            <div id='listed' className="col-11 col-sm-11 col-md-11 col-lg-11 col-xl-11 p-3 card-columns">
                                                {this.state.notes.length && this.state.notes.map(note=>(
                                                    <Note key={note.id} {...note} onRemove={this.removeNotes} />
                                                ))}

                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>



                        </div>
                    </section>
                </div>
            </>
        )
    }
}
