import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './components/context.jsx'
import { Auth0Provider } from '@auth0/auth0-react'


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-j6uogsku5ivtd35l.us.auth0.com"
    clientId="6aobNyOH9wteOXc4NYCY0K5hZEyKffIB"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >    
  <AppProvider>
    <App />
  </AppProvider>
  </Auth0Provider>,
)
