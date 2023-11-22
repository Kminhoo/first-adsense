import React from 'react'
import { Route, Routes } from 'react-router-dom'

import './App.css'
import Header from './components/Header'
import MainPage from './pages/MainPage'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App