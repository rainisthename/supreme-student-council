import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'
import './NavbarStyle.css'
import {Link} from 'react-router-dom'
import mainLogo from './assets/ssc-logo.png'
const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => setNav(!nav)
  return (

    <div className="navbar">
      <div className="logo">
        <Link to='/'>
        {/* <img src={mainLogo} className="logoSize" alt="SSC LOGO" /> */}
        <h3 className="logo-font">SUPREME STUDENT COUNCIL</h3>
        <h5 className="mini-logo">NORTHWESTERN UNIVERSITY</h5>
        </Link>
      </div>
      <ul className="nav-menu">
        <li><Link to='/virtual'>Virtual Tour </Link></li>
        <li><Link to='/transparency'>Transparency</Link></li>
      </ul>
      <div className="hamburger" onClick={handleNav}>
        <GiHamburgerMenu />
      </div>

      <div className={nav ? 'mobile-menu active' : 'mobile-menu'}>
        <ul className="mobile-nav">
        <li><Link to='/virtual'>Virtual Tour </Link></li>
        <li><Link to='/transparency'>Transparency</Link></li>
        </ul>

      </div>

    </div>
  )
}

export default Navbar