import React from 'react'
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import Home from './Home'
import Navbar from "./Navbar.jsx"
import Footer from "./Footer.jsx"
import GetStart from "./GetStart.jsx"
const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/getstarted' exact element={<GetStart/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  )
}

export default App