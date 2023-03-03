import React, { Component } from 'react'

export default class Product extends Component {

    addToCartMethod (id) {
        this.props.addToCart(id)
    }


    
    render() {
        return (
            <div className="shop-item">
                <span className="shop-item-title">{this.props.title}</span>
                <img className="shop-item-image" src={this.props.img} />
                <div className="shop-item-details">
                    <span className="shop-item-price">${this.props.price}</span>
                    <button
                        className="btn btn-primary shop-item-button"
                        type="button"
                        onClick={this.addToCartMethod.bind(this,this.props.id)}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    }
}
