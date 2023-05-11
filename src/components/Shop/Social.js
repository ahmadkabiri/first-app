import React from 'react'

export default function Social(props) {
    

        let {href, img} = props

        return (
            <li>
                <a href={href} target="_blank" rel="noreferrer" >
                    <img src={img} alt='img' />
                </a>
            </li>
        )
    
}
