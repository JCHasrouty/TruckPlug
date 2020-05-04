import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import mapPage from './components/pages/mapPage';
import aboutPage from './components/pages/aboutPage';
import contactPage from './components/pages/contactPage';
import eventPage from './components/pages/eventPage';
import loginPage from './components/pages/loginPage';
import ownerPage from './components/pages/ownerPage';
// includes
//import './Assets/css/default.min.css';
import './Assets/css/default.css';


function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/mapPage' component={mapPage} />
      <Route exact path='/aboutPage' component={aboutPage} />
      <Route exact path='/contactPage' component={contactPage} />
      <Route exact path='/eventPage' component={eventPage} />
      <Route exact path='/loginPage' component={loginPage} />
      <Route exact path='/ownerPage' component={ownerPage} />

      {/* <Footer /> */}
    </div>
    </Router>
  );
}

export default App;
