import React from 'react'
import Home from './Home/Home'
import Navbar from './Navbar'
import SignIn from './SignIn'
import Register from './Register'
import {Route} from 'react-router-dom'
const App = () => {
  return (
    <>
      <Navbar />
      <Route path='/' exact component = {Home}/>
      <Route path='/login' exact component = {SignIn}/>
      <Route path='/register' component={Register} />
    </>
  )
}

export default App
