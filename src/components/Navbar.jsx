import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink 
            to="/" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            end
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/resume" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          >
            Resume
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          >
            Portfolio
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/blog" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          >
            Blog
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink 
            to="/contact" 
            className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
