import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"

const Header = () => {
  return (
    <div className="header">
        <header>
        <div className="logo">
            <img src="../assets/logo.png" alt="" />
            <h3>Travelogged</h3>
        </div>
            <nav>
                <ul>
                    <li>
                        <a>Pricing</a>
                    </li>
                    <li>
                        <a>About us</a>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header