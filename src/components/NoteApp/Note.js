import React, { Component } from 'react'

export default class Note extends Component {


    sendNoteId (id) {
        this.props.onRemove(id)
    }

    render() {

        let {id,inputColor,noteTitle} =this.props

        return (
            <div className="card shadow-sm rounded" style={{ backgroundColor: inputColor }} onClick={this.sendNoteId.bind(this,id)}><p className="card-text p-3">{noteTitle}</p></div>
        )
    }
}
