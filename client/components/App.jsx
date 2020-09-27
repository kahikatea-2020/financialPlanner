import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar'
import Login from './Login'
import {Route} from 'react-router-dom'
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
