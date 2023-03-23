import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Nav from '../Nav/Nav'
import Logo from '../Header/Logo.svg'
import { Link } from 'react-router-dom'

const Header = () => {
  return (<>    <section className='header'>
    <header className='header-content'>
      <div className="logo">
        <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
      </div>
      <form>
        <ul>
        <li class="dropdown">
          <a href="" class="dropbtn">All Categories</a>
          <div class="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
        </ul>
        <input type="search" placeholder='Search for Books...' />
        <BiSearchAlt2 />
      </form>
      <div className="auth-button">
        <Link to={'/login'}><button className='login'>Login</button></Link>
        <Link to={'/signup'}><button className='sing'>SignUp</button></Link>
      </div>
    </header>
  </section >
    <Nav />
  </>

  )
}

export default Header
