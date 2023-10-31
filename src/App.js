import React from 'react'

import { Outlet, Route, Routes } from 'react-router-dom'

import Headers from './components/Header'
import MainPage from './pages/MainPage'
import LoanCalc from './pages/LoanCalc'
import './App.css'


const Layout = () => {
  return (
    <>
      <Headers />

      <Outlet />
    </>
  )
}

const App = () => {
  return (
    <div className='app'>
      <Layout />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/loancalc' element={<LoanCalc />} />
      </Routes>
    </div>
  )
}

export default App