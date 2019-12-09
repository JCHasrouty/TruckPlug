import React from 'react';
import{
    Link,
} from 'react-router-dom';
import Logo from "../../logo/TruckPlug_Logo.png";


function Header() {
  return (
    <header>
        <div className="logo">
            <a href="/">
            <img height="80px" width="80px" src={Logo}/>
            </a>
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
