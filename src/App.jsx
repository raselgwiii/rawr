import { useState } from 'react'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Carousel from './components/Carousel'
import About from'./components/About'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <Navigation/>
        <Carousel/>
        <About/>
        <Footer/>
    </>
  )
}

export default App;
