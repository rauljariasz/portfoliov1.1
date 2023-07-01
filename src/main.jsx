import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Pages/App'
import './index.css'
import { GlobarProvider } from './context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobarProvider>
      <App />
    </GlobarProvider>
  </React.StrictMode>
)
