
import "./Product.css"
import React from 'react'

export default function Product({name,price,src="india.png",count:number ,children}) {
    // console.log(props)

    // let {name,price,src,count} = props
    let count = "none"
    return(
        count && 
        <div className='product'>
        <h1>{name}</h1>
        <h2>{number}</h2>
        <img src={src} alt="" />
        <div className='description'>
            <p>{price}$</p>
            <button>ADD TO CART</button>
            {children}
        </div>
    </div>
    )


    // console.log(props)
    // if(props.count>0){

    //     return (
        //     <div className='product'>
        //       <h1>{props.name}</h1>
        //       <img src={props.src} alt="" />
        //       <div className='description'>
        //           <p>{props.price}$</p>
        //           <button>ADD TO CART</button>
        //       </div>
        //   </div>
    //     )
    // }
}



// Product.defaultProps = {
//     src:"india.png"
// }








