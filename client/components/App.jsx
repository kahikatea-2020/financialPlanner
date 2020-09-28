import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar'
import {Route} from 'react-router-dom'
import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import BinaryOptions from './BinaryOptions'

const App = () => {
  return (
    <>
      <Navbar />
      <Route path='/' exact component = {Home}/>
      <Route path='/login' exact component = {Login}/>
      <Route path='/register' exact component = {Register}/>
      <Route path='/profile' exact component = {Profile}/>
      <Route path='/binaryOptions' exact component = {BinaryOptions}/>
    </>
  )
}

export default App
