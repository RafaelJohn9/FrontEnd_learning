import React from 'react'
import logo from './logo.svg'


export default function Header(){
    return(
      <header>
        <nav>
          <img src={logo} className="logo" alt=""/>
          <ul className='navItems'>
            <li>Home</li>
            <li>Pricing</li>
            <li>Menu</li>
          </ul>
        </nav>
      </header>
    )
  }