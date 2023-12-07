import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import AuthContext from './contexts/authContext'
import { login, signup } from './services/authService'

import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import Login from './components/Login'
import './App.css'
import SignUp from './components/SignUp'
import OfferPage from './components/OfferPage'
import Path from './paths'
import Logout from './components/Logout'
import MyOffers from './components/MyOffers'
import CreateOffer from './components/CreateOffer'


function App() {
  const [auth, setAuth] = useState({})
  const navigate = useNavigate()
  
  useEffect(() => {
    const persistedAuth = JSON.parse(window.localStorage.getItem('auth'))

    if (persistedAuth) {
      setAuth(persistedAuth)
    }
  }, [])
  // email: 'peter@abv.bg', 
  // _id: '35c62d76-8152-4626-8712-eeb96381bea8', 
  // accessToken: '2c12cc199c561e4e3f8fc1bb3b42e4ea01d404babe7a5ef95c4d878cf6ff0e23'

  const loginSubmitHandler = async (values, token) => {
    const result = await login(values, token)
    console.log(result)
    setAuth(result)
    window.localStorage.setItem('auth', JSON.stringify(result))
    navigate(Path.Home)
  }

  const registerSubmitHandler = async (values,token) => {
    console.log(values)
    const result = await signup(values, token)
    console.log(values)
    setAuth(result)
    navigate(Path.Home)
  }

  const logoutHandler = () => {
    setAuth({})
    localStorage.removeItem('auth') // call this if 403 on any request
    navigate(Path.Home)
  }

  console.log('auth', auth)
  const values = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    email: auth.email,
    isAutenticated: !!auth.accessToken,
    token: auth.accessToken
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
          <Route path={Path.Logout} element={<Logout />}></Route>
          <Route path={Path.MyOffers} element={<MyOffers/>}></Route>
          <Route path={Path.CreateOffer} element={<CreateOffer/>}></Route>
        </Routes>

        <Footer />
      </>
    </AuthContext.Provider>
  )
}

export default App
