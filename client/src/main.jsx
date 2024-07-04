import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter ,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'

import { Auth0Provider } from '@auth0/auth0-react';
import PostingPage from './pages/PostingPage.jsx'

const router = createBrowserRouter([
  {
    path : '/',
    element : <App />
  } ,
  {
    path : '/postFood',
    element : <PostingPage />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-p522bmz8rd1qbfzp.us.auth0.com"
      clientId="JTekqN7GH7Jpyr3AeaM0Q85ecjRWwnh8"
      authorizationParams={{redirect_uri: window.location.origin}}
    >
     <RouterProvider router={router}/>
    </Auth0Provider>
  </React.StrictMode>,
)