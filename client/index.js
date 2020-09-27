import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import jwtDecode from 'jwt-decode'
import reducers from './store/reducers'
import { HashRouter as Router } from 'react-router-dom'
import App from './components/App'
import { setAuthorizationToken, setAuth } from './store/actions/auth'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const envr =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk)
    : composeEnhancers(applyMiddleware(thunk))
const store = createStore(reducers, envr)

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken)
  try {
    store.dispatch(setAuth(jwtDecode(localStorage.jwtToken)))
  } catch (err) {
    store.dispatch(setAuth({}))
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
    ,
    document.getElementById('app')
  )
})
