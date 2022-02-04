import React from 'react'
import NavItem from './NavItem'

import './Nav.css'

const Nav = (props) => {
    return (
        <aside className="menu-area">
            <nav className="menu">
                {/* Refatorar em casa */}
                <NavItem href="/" fontIcon="home">Início</NavItem>
                <NavItem href="/users" fontIcon="users">Usuários</NavItem>
            </nav>
        </aside>
    )
}

export default Nav