import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Footer from './components/Footer'
import LoanCalc from './pages/LoanCalc'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/loanCalc' element={<LoanCalc />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App