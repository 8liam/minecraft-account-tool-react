import { useState } from 'react'
import './App.css'
import './svg.css'
import Home from "./pages/home";
import About from "./pages/about";
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from "react-router-dom";



function App() {
  return (
        <>
        <Navigation />
        <Footer />
        </>
  )
}

export default App
