import React from 'react'
import {BsBag} from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import './Cart.css'

function Cart() {
  return (
    <aside className='bag-sidebar active'> {/* add actice class to show bag sidebar */}
    <h3 className="bag-title">
        <span>
            <BsBag></BsBag>
            Bag
        </span>
        <span>
            <AiOutlineClose className='close-icon'></AiOutlineClose>
        </span>
    </h3>

    <div className="row bag-wrapper">
        <div className="col-12 mt-5">
            <div className="card py-3 px-3">
                <div className='col-12 text-center'>
                    <img src="/images/item-1.jpeg" alt="ProductImage" className='cart-img-top w-75' />

                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <p className="card-text">گوشی</p>
                    <p className="price">120</p>
                    <br />
                    <a href="#-" className='btn btn-danger'>Buy</a>
                    <a href="#-" className='btn btn-outline-dark mt-3 text-capitalize'>
                        more information
                    </a>
                    <p className='number'>1</p>
                </div>
            </div>
        </div>
    </div>
    </aside>
  )
}

export default Cart