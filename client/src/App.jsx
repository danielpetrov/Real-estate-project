import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState } from 'react'

import AuthContext from './contexts/authContext'
import { login } from './services/authService'

import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import Login from './components/Login'
import './App.css'
import SignUp from './components/SignUp'
import OfferPage from './components/OfferPage'
import Path from './paths'



function App() {
  const [auth, setAuth] = useState({})
  const navigate = useNavigate()
  
  // email: 'peter@abv.bg', 
  // _id: '35c62d76-8152-4626-8712-eeb96381bea8', 
  // accessToken: '2c12cc199c561e4e3f8fc1bb3b42e4ea01d404babe7a5ef95c4d878cf6ff0e23'

  const loginSubmitHandler = async (values) => {
    const result = await login(values)
    console.log(result)
    setAuth(result)
    navigate(Path.Home)
  }

  const registerSubmitHandler = async (values) => {
    console.log(values)
  }

  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    email: auth.email,
    isAutenticated: !!auth.email,
  }

  return (
    <AuthContext.Provider value={values}>
      <>
        <Header />

        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/properties/:offerId" element={<OfferPage />}></Route>
        </Routes>

        <Footer />
      </>
    </AuthContext.Provider>
  )
}

export default App
