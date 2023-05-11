import React from 'react'

export default function Product(props) {

    const clickHandler = (id) => {
        props.onAddProduct(id)
    }
    
    

        let {id, title, price, img} = props

        return (
            <div className="shop-item">
                <span className="shop-item-title">{title}</span>
                <img className="shop-item-image" alt='img' src={img} />
                <div className="shop-item-details">
                    <span className="shop-item-price">${price}</span>
                    <button
                        className="btn btn-primary shop-item-button"
                        type="button"
                        onClick={() => clickHandler(id)}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        )
    
}
