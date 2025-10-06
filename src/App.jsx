import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Nav from './Components/Navbar/Nav'
import Home from './Pages/Home/Banner/Home'
import British from './Pages/Home/British/British'



function App() {
 

  return (
    <>
     <Nav />
     <Home />
     <British />
    </>
  )
}

export default App
