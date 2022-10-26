import React from 'react'
import logo from '../../assets/img/Logo.png'
import './Logo.css'
import {Link} from 'react-router-dom'

const Logo = () => {
  return (
    <aside className='logo'>
      <Link to='/' className="logo">
        <img src={logo} alt="logo"/>
      </Link>
    </aside>
  )
}

export default Logo