import { Link } from "gatsby"
import React, { useState } from "react"
import logo from "../assets/images/logo.svg"
import { FaAlignJustify } from "react-icons/fa"

const Navbar = () => {
  const [show, setShow] = useState(false)

  const handleClick = () => {
    setShow(!show)
  }

  const handleLinkClick = () => {
    setShow(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="nav-btn" onClick={handleClick}>
            <FaAlignJustify />
          </button>
        </div>
        <div className={show ? "nav-links show-links" : "nav-links"}>
          <Link
            to="/"
            className="nav-link"
            activeClassName="active-link"
            onClick={handleLinkClick}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="nav-link"
            activeClassName="active-link"
            onClick={handleLinkClick}
          >
            About
          </Link>
          <Link
            to="/recipes"
            className="nav-link"
            activeClassName="active-link"
            onClick={handleLinkClick}
          >
            Recipes
          </Link>
          <Link
            to="/tags"
            className="nav-link"
            activeClassName="active-link"
            onClick={handleLinkClick}
          >
            Tags
          </Link>
          <div className="nav-link contact-link">
            <Link to="/contact" className="btn" onClick={handleLinkClick}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
