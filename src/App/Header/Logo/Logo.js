import React from 'react'
import {Link} from 'react-router-dom'
import './logo.css'

const Logo = () => {
    return (
        <div>
            <Link to="/" className="logo">
                    Let`s travel!
            </Link>
        </div>
    )
}

export default Logo
