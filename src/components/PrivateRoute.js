import React from 'react'
import { isLogin } from './../utils'
import { Navigate } from 'react-router-dom';



export default function PrivateRoute ({children}) {
    
    let isUserLogin = isLogin("mohamgmad")

  return (

    <div>
        {
            isUserLogin ? (
                children
            ) : (
                <Navigate to="/login"></Navigate>
            )

        }

    </div>
  )
}