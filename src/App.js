import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import LoanCalc from './pages/LoanCalc'
import Roulette from './pages/Roulette'
import Footer from './components/Footer'


const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/loanCalc' element={<LoanCalc />} />
        <Route path='/roulette' element={<Roulette />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App