import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import Login from './components/Login'
import './App.css'
import SignUp from './components/SignUp'


function App() {
  return (
    <>
      <Header />
      

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
