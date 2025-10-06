import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Components/Navbar/Nav'
import Home from './Pages/Home/Banner/Home'
import British from './Pages/Home/British/British'
import Bite from './Pages/Home/Bite/Bite'


function App() {
 

  return (
    <>
     <Nav />
     <Home />
     <British />
     <Bite />
    </>
  )
}

export default App
