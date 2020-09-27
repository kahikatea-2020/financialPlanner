import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import App from './components/App'
import { Auth0Provider } from "@auth0/auth0-react";

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Router>
      <Auth0Provider
        domain="dev-p2szhd1r.au.auth0.com"
        clientId="RVNjMzUQi8bnzlPIN2iYP7x3bzWK6nte"
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>

    </Router>
    ,
    document.getElementById('app')
  )
})
