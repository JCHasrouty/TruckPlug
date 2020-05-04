import React from 'react';
import{
    Link,
} from 'react-router-dom';
import Logo from "../../logo/TruckPlug_Logo.png";
import LoginIcon from "../../images/login_photo.png";
//import { MDBCol, MDCFormInline, MDBBtn} from "mdbreact";


function Header() {
  return (
    <header>
        <div className="logo">
            <a href="/">
            <img height="80px" width="80px" src={Logo} alt="TruckPlug Logo"/>
            </a>
        </div>

        <nav>
            <ul class="nav_links">
                <li className="first">
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/mapPage">Map</Link>
                </li>
                <li>
                    <Link to="/eventPage">Upcoming Events</Link>
                </li>
                <li>
                    <Link to="/aboutPage">About Us</Link>
                </li>
                <li className="last">
                    <Link to="/contactPage">Contact Us</Link>
                </li>
                {/* <li>
                    <Link to="/loginPage"><img height="60px" width="60px" src={LoginIcon} alt="Login"/></Link>
                </li> */}
            </ul>
        </nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" classname="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
        </Form> */}
    </header>
  );
}

export default Header;
