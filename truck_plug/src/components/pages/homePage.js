import React from 'react';
import FoodImage from "../../images/food_truck_food.jpg";
import Button from 'react-bootstrap/Button';

function Homepage() {
  return (
    <div className="container-fluid">
      <div class="row">
        <div class="column">
          <div class="column-one">
            <h1> 
              Hungry Angry? <br/>
              Don't Know What to Eat? <br/>
              Let The Truck Plug Help You Out! <br/>  
            </h1>
            <h2>
              Navigate to our Maps page and start your food truck adventure today!
            </h2>
            <div className ="plug-button">
            <Button href="/mapPage" variant="danger" size="lg">
              PLUG
            </Button>
        </div>
          </div>
        </div>
        <div class="column">
          <div class="column-two">
          <img src={FoodImage} align="right" width="600" height="400"></img>
          </div>
        </div>
      </div>
      { /* Add another row here for footer */ }
        {/* <h1>
          <img src={FoodImage} align="right" width="600" height="400"></img>
            Hungry? Angry? <br/>
            Don't Know What to Eat? <br/>
            Let The Truck Plug Help You Out! <br/>
        </h1>
        <h2>
        Navigate to our Maps page and start your food truck adventure today!
        </h2>
        <p>
        Navigate to our Maps page and start your food truck adventure today!
        </p> */}
        {/* <div className ="plug-button">
            <Button href="/mapPage" variant="danger" size="lg">
              PLUG
            </Button>
        </div> */}
    </div>
  );
}

export default Homepage;
