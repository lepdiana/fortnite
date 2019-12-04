import React from 'react'
import {Link} from 'react-router-dom'
import '../style/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='products'>Products</Link>
            <Link to='/populars' className='popularProducts'>Popular Products</Link>
            <Link to='/about' className='about'>About</Link>
        </div>
    )
}

export default Navbar

