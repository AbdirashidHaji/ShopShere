import React from 'react'
import { Route, BrowserRouter as Router, Routes} from "react-router-dom"
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './componets/common/Navbar'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import VerifyEmail from './pages/auth/VerifyEmail'
import ForgotPassword from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'
import Footer from './componets/common/Footer'


const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/about' element = {<AboutPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/verify-email/:token" element={<VerifyEmail />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:token" element={<ResetPassword />} />

      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
