import React from 'react'
import {Link} from 'react-router-dom'
import '../style/navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>
            <Link to='/' className='products'>Products</Link>
            <Link to='/upcomingitems' className='upcomingItems'>Upcoming Items</Link>
            <Link to='/about' className='about'>About</Link>
        </div>
    )
}

export default Navbar

