import React, { Component } from 'react'
import '../Header/Header.css'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Icon} from 'react-materialize'
import { ThemeContext } from '../ThemeContext'
export default function Header() {
  const { theme, toggle, dark } = useContext(ThemeContext);

  return (
    <div>
      <nav
        className="header-nav"
        style={{
          backgroundColor: theme.backgroundColor,
          color: theme.color,
        }}
      >
        <ul className="nav-links">
          <li><Link to="/" style={{ color: theme.color }}>Home</Link></li>
          <li><Link to="/news" style={{ color: theme.color }}>News</Link></li>
          <li><Link to="/about" style={{ color: theme.color }}>About</Link></li>
          <li><Link to="/contact" style={{ color: theme.color }}>Contact</Link></li>
          <div style={{ position: 'relative' }}>
            <button
              className="switch-mode"
              onClick={toggle}
              style={{
                backgroundColor: theme.backgroundColor,
                color: theme.color,
                outline: 'none',
                border: '1px solid',
                padding: '10px 15px',
                cursor: 'pointer',
              }}
              data-testid="toggle-theme-btn"
            >
              Switch Nav to {!dark ? 'Dark' : 'Light'} mode
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
}