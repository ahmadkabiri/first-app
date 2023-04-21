import React from 'react'
import { useState } from 'react'

function WithShowToggle(OriginalComponent) {
  const NewComponent = (props) => {

    const [showInfo,setShowInfo] = useState(false)

    const toggleShowInfoHandler = () => {
        setShowInfo(prevShowInfo => !prevShowInfo)
    }

    return(
        <OriginalComponent showInfo={showInfo} toggleShowInfoHandler={toggleShowInfoHandler} {...props}></OriginalComponent>
    )
  }

  return NewComponent

}

export default WithShowToggle