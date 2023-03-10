import React from 'react'
import { HiShoppingCart } from 'react-icons/hi'
import { FaHeart } from "react-icons/fa"
const Nav = () => {
    return (
        <section className='navbar'>
            <navbar className="navbar-content">
                <div className="nav-first">
                    <a href="#"><span>Newin</span></a>
                    <a href="#"><span>All Collections</span></a>
                </div>
                <div className="nav-second">
                    <a href="#"><p>1st <span>Year</span> </p></a>
                    <a href="#"><p>2nd <span>Year</span> </p></a>
                    <a href="#"><p>3rd <span>Year</span> </p></a>
                    <a href="#"><p>4th <span>Year</span> </p></a>
                </div>
                <div className="nav-third">
                    <div className='heart-bg'>
                        <FaHeart />
                    </div>
                    <div className='heart-bg'>
                        <HiShoppingCart />
                    </div>
                    <p>0</p>
                </div>
            </navbar>
        </section>
    )
}

export default Nav
