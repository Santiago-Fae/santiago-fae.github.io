import React, { useState } from 'react';
import SchoolIcon from '@material-ui/icons/School';


class Header extends React.Component {
  render() {
    return (
      <div>
        <i class="bi bi-list mobile-nav-toggle d-xl-none" style={{ color: "rgb(114, 131, 148)" }}></i>
        <header id="header" className="header d-flex flex-column justify-content-center">
          <nav id="navbar" className="navbar nav-menu navbar-expand-sm">
            <ul>
              <li>
                <a href="/#projects" aria-label='Me' className="nav-link scrollto d-flex justify-content-center">
                  <i class="bx bx-home"></i> 
                  <span>Home</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;