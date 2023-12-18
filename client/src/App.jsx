import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import AuthContext from './contexts/authContext'
import ErrorContext from './contexts/errorContext'
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
import ErrorPopup from './components/ErrorPopup'
import Loader from './components/Loader'
import LoaderContext from './contexts/loaderContext'


function App() {


  const [auth, setAuth] = useState({})
  const [error, setError] = useState({ hasError: false })
  const [loading, setLoading] = useState({ isLoading: false })

  console.log('error', error)
  const navigate = useNavigate()

  useEffect(() => {
    const persistedAuth = JSON.parse(window.localStorage.getItem('auth'))

    if (persistedAuth) {
      setAuth(persistedAuth)
    }
  }, [])

  const loginSubmitHandler = async (values) => {
    try {
      setLoading({ isLoading: true })
      const result = await login(values)
      setAuth(result)
      window.localStorage.setItem('auth', JSON.stringify(result))
      navigate(Path.Home)
    } catch (e) {
      setError({ hasError: true, message: e.message })
    } finally {
      setLoading({ isLoading: false })
    }
  }

  const registerSubmitHandler = async (values) => {
    console.log(values)
    if (values.confirmedPassword === values.password) {
      try {
        setLoading({ isLoading: true })
        const token = auth.accessToken
        const result = await signup(values, token)
        setAuth(result)
        window.localStorage.setItem('auth', JSON.stringify(result))
        navigate(Path.Home)
      } catch {
        console.log('test')
      } finally {
        setLoading({ isLoading: false })

      }
    } else {
      setError({ hasError: true, message: "Паролите не съвпадат, моля опитайте отново." })
    }

  }

  const logoutHandler = async() => {
  
      const token = auth.accessToken
      logout(token)
        .then(setAuth({}))
        .then(localStorage.removeItem('auth')) // call this if 403 on any request
        .then(navigate(Path.Home))
   
  }

  const addNewOfferHandler = async (values) => {
    try {
      setLoading({ isLoading: true })
      console.log(auth)
      const token = auth.accessToken
      const result = await addNewOffer(values, token)
        .then(navigate(Path.MyOffers))
      console.log(result)
    } catch {
      console.log('test')
    } finally {
      setLoading({ isLoading: false })
    }

  }
  const editOfferHandler = async (_id, values) => {
    try {
      setLoading({ isLoading: true })
      const token = auth.accessToken
      const result = await editMyOffer(_id, token, values)
        .then(navigate(Path.MyOffers))
      console.log(result)
    } catch {
      console.log("test")
    } finally {
      setLoading({ isLoading: false })
    }
  }

  const getProfileDataHandler = async () => {
    const token = auth.accessToken
    const result = await getProfileData(token)
    console.log(result)
  }

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

  const errorContextValues = {
    error: error,
    setError: setError
  }

  const loadingContextValues = {
    loading
  }

  return (
    <LoaderContext.Provider value={loadingContextValues}>
      <ErrorContext.Provider value={errorContextValues}>
        <AuthContext.Provider value={authContextValues}>
          <>
            <Header />
            <ErrorPopup />
            <Loader />

            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<SignUp />}></Route>
              <Route path="/properties/:offerId" element={<OfferPage />}></Route>
              <Route path={Path.Logout} element={<Logout />}></Route>
              <Route path={Path.MyOffers} element={<MyOffers />}></Route>
              <Route path={Path.CreateOffer} element={<CreateOffer />}></Route>
              <Route path="/secure/properties/:_id" element={<MyOfferPage />}></Route>
              <Route path="/edit/:_id" element={<EditOfferForm />}></Route>
              <Route path="/delete/:_id" element={<DeleteOffer />}></Route>
              <Route path="/myprofile" element={<Profile />}></Route>

            </Routes>

            <Footer />
          </>
        </AuthContext.Provider>
      </ErrorContext.Provider>
    </LoaderContext.Provider>
  )
}

export default App
