import React from 'react';
import{
    Link
} from 'react-router-dom';

function Header() {
  return (
    <header>
        <div className="logo">
            <img src={require('./TruckPlug_Logo.png')}/>
        </div>

        <nav>
            <ul>
                <li className="first">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mapPage">Map</Link>
                </li>
                <li>
                    <Link to="/aboutPage">About Us</Link>
                </li>
                <li className="last">
                    <Link to="/contactPage">Contact</Link>
                </li>
            </ul>
        </nav>
    </header>
  );
}

export default Header;
