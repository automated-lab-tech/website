import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css';

const Header = ({ siteTitle }) => (
  <div className='Header'>
    <div className='HeaderGroup'>
      <Link to='/' id='HeaderGroup-Logo'><img src={require('../images/logo words white.svg')} width='200px' alt='logo' /></Link>
      <div id='HeaderGroup-Links'>
        <Link to='/about' id='about'>About</Link>
        <Link to='/contact' id='contact'>Contact</Link>
        <Link to='/tech' id='tech'>Technology</Link>
      </div>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
