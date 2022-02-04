import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'


import { BrowserRouter } from 'react-router-dom'
import Router from './Router'
import React from 'react'
import Logo from '../components/template/Logo'
import Nav from '../components/template/Nav'
import Footer from '../components/template/Footer'

import './App.css'

const App = (props) => {

    return (
        <BrowserRouter>
            <div className="app">
                <Logo />
                <Nav />
                <Router></Router>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App