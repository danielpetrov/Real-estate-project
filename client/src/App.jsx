import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import HomePage from './components/HomePage'
import About from './components/About'
import './App.css'


function App() {
  return (
    <>
      <Header />
      

      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
