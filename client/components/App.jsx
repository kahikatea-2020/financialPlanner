import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar'
import {Route} from 'react-router-dom'
import Login from './Login'
const App = () => {
  return (
    <>
      <Navbar />
      <Route path='/' exact component = {Home}/>
      <Route path='/login' exact component = {Login}/>
    </>
  )
}

export default App
