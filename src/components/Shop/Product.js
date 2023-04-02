import React, { Component } from 'react'

export default class Product extends Component {

    // constructor (props) {
    //     super(props)

    //     this.clickHandler = this.clickHandler.bind(this)
    // }
    
    clickHandler (id) {
        this.props.onAdd(id)
    }

    render() {
        return (
            <div className="shop-item">
                <span className="shop-item-title">{this.props.title}</span>
                <img className="shop-item-image" src={this.props.img} alt='productpicture' />
                <div className="shop-item-details">
                    <span className="shop-item-price">${this.props.price}</span>
                    <button
                        className="btn btn-primary shop-item-button"
                        type="button" onClick={this.clickHandler.bind(this,this.props.id)}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
