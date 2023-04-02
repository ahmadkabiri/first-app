import React, { Component } from 'react'

export default class Social extends Component {
    render() {
        // console.log(this.props, 'props');
        return (
            <li>
                <a href={this.props.href} target="_blank">
                    <img src={this.props.img}  />
                </a>
            </li>
        )
    }
}
