// eslint-disable-next-line no-unused-vars
import { Link } from 'react-router-dom';

import './Navbar.css';
export function NavBar() {
  return (
    <div>

      <nav >
        <div className='head'>
        <a href="/" className="link1">
              Home
            </a>
          
            <a href="/about" className="link2">
              About
            </a>
          
            <a href="/projects" className="link3">
              Projects
            </a>
          
            <a href="/experience" className="link4">
              Experience
            </a>
        
            <a href="/contacts" className="link5">
              Contacts
            </a>
            </div>
      </nav>    
      </div>
  );
}
