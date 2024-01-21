import {Link} from 'react-router-dom'
import {HiMenuAlt3} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'

import './Navbar.scss'
import { useState } from 'react'


export const Navbar = () => {

    const [menuIconState, setMenuIconState] = useState(true)


    return (
        <div className="navbar">
            <div className="navbar-container">
                <div className="logo-wrapper">
                    {/* <img src="/public/assets/shared/desktop/logo-light.png" alt="" /> */}
                    <Link to='/' ><img src="../assets/shared/desktop/logo-dark.png" alt="" /></Link>
                </div>
                <div className={`nav-links-wrapper ${menuIconState ? '' : 'menu-state'} `}>
                    <ul>
                        <li><Link to='/about'>OUR COMPANY</Link></li>
                        <li><Link to='/locations'>LOCATIONS</Link></li>
                        <li><Link to='/contact'>CONTACT</Link></li>
                    </ul>
                </div>
                <div className="nav-icons-wrapper">
                    {menuIconState && 
                    <HiMenuAlt3 
                    className='menu-icon' 
                    onClick={() => {
                        setMenuIconState(false)
                    }}  />}
                    {!menuIconState && 
                    <AiOutlineClose 
                    className='close-menu-icon' 
                    onClick={() => {
                        setMenuIconState(true)
                    }}
                    />}
                </div>
            </div>
        </div>
    )
}