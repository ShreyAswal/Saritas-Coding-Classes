// import { useState } from 'react'
import './App.css'
// import Header from './components/headers/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/about/About'
import Testimonies from './pages/testimonies/Testimonies'
import Contact from './pages/contact/Contact'

function App(): JSX.Element {

  return (
    <>
    {/* <h1>Heartless yea!</h1> */}
    {/* <Header/> */}
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Testimonies" element={<Testimonies/>} />
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
