import React from 'react'

import logo from '../../assets/images/logo.png'
import './Logo.css'

const Logo = (props) => {
    return (
        <aside className="logo">
            <a href="/" className='logo'>
                <img src={logo} alt="logo"/>
            </a>
        </aside>
    )
}

export default Logo