import React from 'react';
import '../Css/Navbars.css';


const NavBars = () => {
    return (
        <nav className="navbar">
            <div className="nav-item">
                <a href="#" idy="home-link">Home</a>
            </div>
            <div className="nav-item">
                <input type="text" id="search-bar" placeholder="Search" />
            </div>
            <div className="nav-item" id="user-info">
                <img src="user-avatar.jpg" alt="User Avatar" width="30" height="30" />
                <span>Username</span>
            </div>
        </nav>
    );
};

export default NavBars;
