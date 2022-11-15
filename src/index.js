import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { AppProvider } from './context'
//import './index.css'
import App from './App'
ReactDOM.render(
   <StrictMode>
      <Router>
         <AppProvider>
            <App/>
         </AppProvider>
      </Router>
   </StrictMode>,
   document.getElementById('root')
)