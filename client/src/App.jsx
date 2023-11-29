import './App.css'
import BestOffersList from './components/BestOffersList'
import Footer from './components/Footer'
import Header from './components/Header'
import HeadingImage from './components/HeadingImage'
import SearchForm from './components/SearchForm'



function App() {
  return (
    <>
      <Header />
      <HeadingImage />
      <SearchForm />
      <BestOffersList />
      <Footer />
    </>
  )
}

export default App
