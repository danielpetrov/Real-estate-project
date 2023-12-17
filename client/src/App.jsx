import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import AuthContext from './contexts/authContext'
import { getProfileData, login, logout, signup } from './services/authService'
import 'bootstrap/dist/css/bootstrap.min.css'

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
import { addNewOffer, editMyOffer } from './services/collections'
import MyOfferPage from './components/MyOfferPage'
import EditOfferForm from './components/EditOfferForm'
import Profile from './components/Profile'
import DeleteOffer from './components/DeleteOffer'

function App() {


  const [auth, setAuth] = useState({})
  console.log(auth.accessToken)
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


  const loginSubmitHandler = async (values) => {
    const result = await login(values)
    console.log(result)
    setAuth(result)
    window.localStorage.setItem('auth', JSON.stringify(result))
    navigate(Path.Home)
  }

  const registerSubmitHandler = async (values) => {
    const token = auth.accessToken
    const result = await signup(values, token)
    setAuth(result)
    window.localStorage.setItem('auth', JSON.stringify(result))
    navigate(Path.Home)
  }

  const logoutHandler = () => {
    const token = auth.accessToken
    logout(token)
      .then(setAuth({}))
      .then(localStorage.removeItem('auth')) // call this if 403 on any request
      .then(navigate(Path.Home))
  }

  const addNewOfferHandler = async (values) => {
    console.log(auth)
    const token = auth.accessToken
    const result = await addNewOffer(values, token)
      .then(navigate(Path.MyOffers))
    console.log(result)

  }
  const editOfferHandler = async (_id, values) => {
    const token = auth.accessToken
    const result = await editMyOffer(_id, token, values)
      .then(navigate(Path.MyOffers))
    console.log(result)
  }

  const getProfileDataHandler = async () => {
    const token = auth.accessToken
    const result = await getProfileData(token)
    console.log(result)
  }

  console.log('auth', auth)
  const authContextValues = {
    loginSubmitHandler,
    registerSubmitHandler,
    logoutHandler,
    addNewOfferHandler,
    editOfferHandler,
    getProfileDataHandler,
    email: auth.email,
    isAuthenticated: !!auth.accessToken,
    token: auth.accessToken
  }

  return (
      <AuthContext.Provider value={authContextValues}>
        <>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/properties/:offerId" element={<OfferPage />}></Route>
            <Route path={Path.Logout} element={<Logout />}></Route>
            <Route path={Path.MyOffers} element={<MyOffers />}></Route>
            <Route path={Path.CreateOffer} element={<CreateOffer />}></Route>
            <Route path="/data/properties/:_id" element={<MyOfferPage />}></Route>
            <Route path="/edit/:_id" element={<EditOfferForm />}></Route>
            <Route path="/delete/:_id" element={<DeleteOffer />}></Route>
            <Route path="/myprofile" element={<Profile />}></Route>

          </Routes>

          <Footer />
        </>
      </AuthContext.Provider>
  )
}

export default App
