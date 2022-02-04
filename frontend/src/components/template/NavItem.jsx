import React from 'react'
import { Link } from 'react-router-dom'

const NavItem = (props) => {
    return (
        <Link to={props.href ? props.href : "/"}>
            <i className={`fa fa-${props.fontIcon}`}></i>
            {props.children}
        </Link>
    )
}

export default NavItem