import React from "react"
import { Link } from "react-router-dom"
import HeaderIcon from '../../logos/header.svg'
import '../../App.css'

const Navbar = () => {
  return (
    <div className="navbar-items">
      <Link to='/inito-app' id="inito-icon">
        <img src={HeaderIcon} alt="headerIcon" />
      </Link>
      <Link to='/about' id="about">About</Link>
      <Link to='/blog' id="blog">Blog</Link>
      <Link to='/faq' id="faq">FAQ</Link>
      <Link to='/contact' id="contact">Contact</Link>
      <button className="primary-btn" id="inito-btn">Try Inito</button>
    </div>
  )
}

export default Navbar