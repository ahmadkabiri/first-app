import './App.css'

import React from 'react'

import {Provider} from 'react-redux'
import CakeContainer from './components/CakeContainer'
import store from '../src/redux/store'
export default function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer/>
      </div>
    </Provider>
  )
}
