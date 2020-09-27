import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar'
import {Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar />
      <Route path='/' exact component = {Home}/>
    </>
  )
}

export default App
