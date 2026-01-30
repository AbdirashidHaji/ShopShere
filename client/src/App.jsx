import React from 'react'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './componets/Navbar'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/about' element = {<AboutPage/>} />
      </Routes>
    </Router>
  )
}

export default App
