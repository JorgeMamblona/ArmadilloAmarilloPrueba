import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { AuthContextWrapper } from './contexts/auth.context'
import { BrowserRouter as Router } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextWrapper>
    <Router>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Router>
  </AuthContextWrapper>,
)
