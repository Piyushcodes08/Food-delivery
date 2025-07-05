import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './Components/Footer/Footer';

import Header from './Components/Header/Header';
import Home from './Components/Home/Section/Home';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
