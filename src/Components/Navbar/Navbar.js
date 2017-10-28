import React from 'react'
import {Link} from 'react-router-dom'

import MenuItem from './MenuItem'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='Navigation'>
      <nav className='navbar navbar-default'>
        <div className='container'>
          <div className='navbar-header'>
            <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
              <span className='sr-only'>Toggle navigation</span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
              <span className='icon-bar'></span>
            </button>
            <span className='navbar-brand'>
              <h1 className='title'>OM WEB DESIGN</h1>
              <img src='https://www.omwdesign.eu/img/omwdesign.eu.png' className='logo' alt='site logo' width='100px;' />
            </span>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav'>
              <li>
                <Link to='/'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about'>
                  About
                </Link>
              </li>
              <li className='dropdown'>
                <a className='dropdown-toggle' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false'>My web designs
                  <span className='caret'></span>
                </a>
                <MenuItem />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Navbar
