import React from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import Nav from '../Nav/Nav'
import Logo from '../Header/Logo.svg'

const Header = () => {
  return (<>    <section className='header'>
    <header className='header-content'>
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <form>
        <button>hello</button>
        <input type="search" placeholder='Search for Books...' />
        <BiSearchAlt2 />
      </form>
      <div className="auth-button">
        <button className='login'>Login</button>
        <button className='sing'>Signup</button>
      </div>
    </header>
  </section >
    <Nav />
  </>

  )
}

export default Header
