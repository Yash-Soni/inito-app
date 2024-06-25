import React from "react"
import { Link, NavLink } from "react-router-dom"
import About from "../About"
import Blog from "../Blog"
import FAQ from "../FAQ"
import Contact from "../Contact"
import HeaderIcon from '../../logos/header.svg'

const Navbar = () => {
  return (
    <div>
      <img src={HeaderIcon} alt="headerIcon" />
      <Link to='about'>About</Link>
      <Link to='blog'>Blog</Link>
      <Link to='faq'>FAQ</Link>
      <Link to='contact'>Contact</Link>
      <button className="primary-btn">Try Inito</button>
    </div>
  )
}

export default Navbar