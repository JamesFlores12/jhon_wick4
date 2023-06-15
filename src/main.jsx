import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './screens/Home.jsx'
import {Route,BrowserRouter, Routes} from 'react-router-dom'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<App />*/}
    
    <BrowserRouter>
        <Routes>
          <Route path='/'element= {<Home/>}/>
          <Route path='/peliculas'element= {<App/>}/>
          <Route path='*' element={<p>Not found</p>}/>
        </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
