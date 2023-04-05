import React, { Component } from 'react'

export default function CartProduct (props) {

    const clickHandler = (id) => {
        props.onRemove(id)
    }


        let {id, title, price, img} = props

        return (
            <div className="cart-row">
                <div className="cart-item cart-column">
                    <img className="cart-item-image" src={img} width="100" height="100" />
                    <span className="cart-item-title">{title}</span>
                </div>
                <span className="cart-price cart-column">${price}</span>
                <div className="cart-quantity cart-column">

                    <button className="btn btn-danger" type="button" onClick={() => clickHandler(id)}>REMOVE</button>
                </div>
            </div>
        )
    
}
