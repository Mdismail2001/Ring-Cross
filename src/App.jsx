import { useState } from 'react'
import './App.css'
import MainContainer from './components/RingAndCross/MainContainer'
import { Outlet } from 'react-router'




function App() {

  return (
    <>
    <Outlet></Outlet>
    </>
  )
}

export default App
