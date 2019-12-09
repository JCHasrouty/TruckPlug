import React from 'react';
import AboutImage1 from "../../images/about_me_photo_1.jpg";
import AboutImage2 from "../../images/about_me_photo_2.jpg";
import AboutImage3 from "../../images/about_me_photo_3.png";
import AboutImage4 from "../../images/about_me_photo_4.jpg";

function Aboutpage() {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="column">
          <div class="about-column-one">
          <img src={AboutImage1} align="center" width="400" height="300"></img>
          <br />
            <h2>Gustavo Chavez</h2>
          </div>
          </div>
          <div class="column">
            <div class="about-column-two">
            <img src={AboutImage2} align="center" width="400" height="300"></img>
            <br />
              <h2>Jean Claude Hasrouty</h2>
            </div>
            </div>        
            <div class="column">
            <div class="about-column-three">
            <img src={AboutImage3} align="center" width="300" height="300"></img>
            <br />
              <h2>Joseph Castro</h2>
            </div>
            </div>
            <div class="column">
            <div class="about-column-four">
            <img src={AboutImage4} align="center" width="300" height="300"></img>
            <br />
              <h2>Chun-Yeng Wang (Vince)</h2>
            </div>
            </div>    
      </div>
      <div class="row">
        <div class="column">
          We started this company with one thought in mind... food. You thought we were going to say you huh? Well you're wrong. Food is love, food is life. 
        </div>
      </div>
    </div>
  );
}

export default Aboutpage;
