import React from "react"
import { NavLink } from "react-router-dom"
import '../styles/Navbar.css'


const Navbar = () => {
    let activeStyle = {
        textDecoration: "underline"
    }

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to='/'
                        style={
                            ({ isActive }) => isActive ? activeStyle : undefined} >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/isles'
                        style={
                            ({ isActive }) => isActive ? activeStyle : undefined} >
                        Isles
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/characters'
                        style={
                            ({ isActive }) => isActive ? activeStyle : undefined} >
                        Characters
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/summaries'
                        style={
                            ({ isActive }) => isActive ? activeStyle : undefined} >
                        Summaries
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar