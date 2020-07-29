import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { NavigationRoute, NavItems } from "../utils/constants"

const NavItem = ({
                   name,
                   link
                 }) => (
  <Link to={link}
        className={'header__nav-link'}
  >
    {name}
  </Link>
)
const Nav = () => {
  const navContent = [{
    id: 1,
    name: NavItems.HOME,
    link: NavigationRoute.HOME
  }, {
    id: 2,
    name: NavItems.ABOUT,
    link: NavigationRoute.ABOUT
  }, {
    id: 3,
    name: NavItems.PORTFOLIO,
    link: NavigationRoute.PORTFOLIO
  }, {
    id: 4,
    name: NavItems.CONTACT,
    link: NavigationRoute.CONTACT
  }]
  return (
    <nav
      className='header__nav'
    >
      {navContent.map((item, i) =>
        <NavItem key={item.id}
                 name={item.name}
                 link={item.link}
        />
      )}
    </nav>

  )
}

const Header = ({ siteTitle }) => {
  return (
    <header
      className='header'
    >
      <Nav/>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
