import React from 'react'
import Landing from './components/LandingPage'
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Checkout from './components/Checkout'
import Payment from './components/Payment'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/'  element= {<Landing />} /> 
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/payment' element={<Payment />} />
      </Routes>
    </div>
  )
}

export default App