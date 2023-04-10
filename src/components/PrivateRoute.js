import React from 'react'
import { isLogin } from './../utils'
import { Navigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';


export default function PrivateRoute ({children}) {
    
    let isUserLogin = isLogin("mohamgmad")

  return (

    <div>
        {
            isUserLogin ? (
                // children
                <Outlet></Outlet>
            ) : (
                <Navigate to="/login"></Navigate>
            )

        }

    </div>
  )
}