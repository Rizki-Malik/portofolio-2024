import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/Galaxy.jsx'
import './assets/css/index.css'
// import './assets/js/star.js'
import './assets/js/ship.js'
import { CursorProvider } from './views/components/Cursor/CursorContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CursorProvider>
      <App />
    </CursorProvider>
  </React.StrictMode>,
)