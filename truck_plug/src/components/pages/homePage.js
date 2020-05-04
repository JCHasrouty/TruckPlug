import React from 'react';
import FoodImage from "../../images/food_truck_food.jpg";
import FoodGatheringImage from "../../images/food_truck_gathering.jpg";
import Button from 'react-bootstrap/Button';

function Homepage() {

  return (

    <div class="container-fluid">
      <div class="hungry_angry">
        <h1> 
          Hungry? Angry? <br/>
          Don't Know What to Eat? <br/>
        </h1>

        <h3>
          Let the Truck Plug help you out. Navigate to our Maps page and start your food truck adventure today!
        </h3>
        <Button href="/mapPage" variant="danger" size="lg" class="plug_button"> PLUG </Button>

      </div>

      <div class="cheese_fries">
        <img src={FoodImage} alt={"Image of cheese fries and burger"}/>
      </div>

      <div class="truck_meet">
        <img src="https://www.austinchronicle.com/binary/4f1d/27023542_327502024412463_2334521810091458092_o.jpg"ß alt="Food Truck Festival"/>
      </div>

      <div class="meet_description">
        <h1>Different type of festival</h1>
        <h3>Food truck festivals are popping up all over cities, and for good reasons. Whether you want a quick bite or
            a new food experience, food trucks are here to fill that void!
        </h3>  
      </div>

      <div class="why_trucks">
        <h1>Why Food Trucks?</h1>
        <h3>Food trucks not only provide you with a quick bite to eat, it can introduce you to new and exciting fusion foods. 
            Are you in the mood for Korean BBQ tacos? Maybe you would like a sushi burrito? The Truck Plug can help you!
        </h3>
      </div>

      <div class="sushi_burritos">
        <img src="https://raster-static.postmates.com/?url=com.postmates.img.prod.s3.amazonaws.com/49cdaaff-e7e2-4d44-a7d4-0ecab70a7eef/orig.jpg&quality=90&w=1500&h=900&mode=crop&format=jpg&v=4" alt="Sushi Burritos"></img>
      </div>

      <div class="covid_19">
        <h1>Covid-19</h1>
        <h3>
          Worried about getting food during this pandemic? Let the Truck Plug help you in finding local trucks
          so you can continue supporting them during this tough time. You can order food using the food delivery 
          services that you are already familiar with!
        </h3>
      </div>

      <div class="delivery_services">
        <img src="https://pbs.twimg.com/media/EDOUHRGXsAAp8lN.jpg" alt="Food Delivery Service Logos"></img>
      </div>

      <div class="owner_sign_up">
        <h1>Don't See Your Truck With Us?</h1>
        <h3>
          Sign up with us below to add your food truck to our database and reach a base of a million customers.
        </h3>
        <Button href="/ownerPage" variant="danger" size="lg" class="plug_button"> SIGN UP </Button>
      </div>

      <div class="food_truck_gathering">
        <img src={FoodGatheringImage} alt={"Food truck gathering"} />
      </div>

    </div> /* container-fluid div */
  );
}

export default Homepage;
