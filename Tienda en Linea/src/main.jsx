// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import NavBar from './components/navBar/NavBar.jsx'
// import Aside from './components/aside/Aside.jsx'
// import Items from './pages/items/Items.jsx'
// import Login from './pages/login/Login.jsx'
// import { Routes, Route } from 'react-router-dom'
// import './index.scss'

import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './components/navBar/NavBar.jsx'
import Aside from './components/aside/Aside.jsx'
import { BrowserRouter } from 'react-router-dom'
import RoutesIndex from './routes/RoutesIndex.jsx'
import './index.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavBar />
      <div className='main-content'>
        <Aside className="main-aside"/>
      </div>
        <RoutesIndex />
    </BrowserRouter>
  </React.StrictMode>,
)