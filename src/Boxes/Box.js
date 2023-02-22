import React from 'react'
import "./Box.css"




export default function Box({icon,title,description}) {
  return (
    <div>
        <div className='box'>
            <div className='icon'>
                {icon}
            </div>
            <h4 className='title'>{title}</h4>
            <p className='description'>{description}</p>
        </div>
    </div>
  )
}
