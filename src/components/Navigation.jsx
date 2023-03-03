import React from 'react'
import { Link } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SearchFunction from '../pages/home'
import About from '../pages/about'
// the header
export default function Navigation () {
    return (
        <>
        <div className="container mt-4 navcont navigation_bar" >
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to='/' className='navbar-brand'><i className="fal fa-sparkles"></i> Minecraft Account History</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        
                        <li className="nav-item active">
                            <Link to='/' className='nav-link'>Home</Link>
                        </li>
                        
                        <li className="nav-item">
                            <Link to='/about' className='nav-link'>about</Link>
                        </li>
                        {/* 
                        <li className="nav-item">
                            <a className="nav-link" href="donate/">donate</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://discord.gg/w8yhcYX" target="_blank">discord</a>
                        </li>
                        */}
                    </ul>
                    <span className="navbar-text">
                        made by liam
                    </span>
                </div>
            </nav>
            <hr className="line_space"></hr>
        </div>

        <Routes>
            <Route path="/" element={<SearchFunction />} />
            <Route path="/about" element={<About />} />
        </Routes>
        </>
        )
    }




