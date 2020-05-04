import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import FiveStarRating from "../../images/Five_Star_Rating.png";
import FourStarRating from "../../images/Four_Star_Rating.png";
import FourHalfStarRating from "../../images/Four_Half_Star_Rating.png";
import OneDollar from "../../images/one_coin.png";
import TwoDollar from "../../images/two_coins.png";
import ThreeDollar from "../../images/three_coins.png";
import CreditCard from "../../images/credit_card.jpg";
import MoneyIcon from "../../images/money.png";


const mapStyles = {
    width: '100%',
    height: '850px'
};

let geocoder;

class MapContainer extends Component {
    constructor (props) {
        super(props);
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.displayMarkers = this.displayMarkers.bind(this);
        this.state = {
            lat: 34.052235,
            lng: -118.243683,
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
            address: [],
            city: [],
            zipcode: [],
            phone_number: [],
            payment_type: [],
            truck_name: [],
            url: [],
            //add by joey
            coordinates: [],
            food_type: [],
            rating: [],
            price_range: [],
            food_suggest: [],
            star_image: [FiveStarRating]
        }
    }

    componentDidMount () {
        this.getTruckInfo()
        this.getTruckDetails();
    }

    getTruckInfo = () => {
        fetch('/api/truck_info')
            .then(res => res.json())
            .then(res => {
                var truck_name = res.map(r => r.truck_name);
                var address = res.map(r => r.address);
                var city = res.map(r => r.city);
                var zipcode = res.map(r => r.zipcode);
                var phone_number = res.map(r => r.phone_number);
                var payment_type = res.map(r => r.payment_type);
                var coordinates = res.map(r => r.coordinates);
                this.setState({truck_name});
                this.setState({address});
                this.setState({city});
                this.setState({zipcode});
                this.setState({phone_number});
                this.setState({payment_type});
                this.setState({coordinates});
            });
    }

    getTruckDetails = () => {
        fetch('/api/truck_details')
            .then(res => res.json())
            .then(res => {
                var food_type = res.map(r => r.food_type);
                var rating = res.map(r => r.rating);
                var price_range = res.map(r => r.price_range);
                var food_suggest = res.map(r => r.food_suggest);
                var url = res.map(r => r.url);
                this.setState({food_type});
                this.setState({rating});
                this.setState({price_range});
                this.setState({food_suggest});
                this.setState({url});
            });
    };

    displayMarkers () {
        return this.state.coordinates.map((coordinates, index) => {
            return <Marker key={index} id={index} position={{
                lat: coordinates.x,
                lng: coordinates.y
            }}
                           onClick={this.onMarkerClick}
                            name={this.state.truck_name[index]}
                            name1={this.state.address[index]}
                            name2={this.state.city[index]}
                            name3={this.state.zipcode[index]}
                            name4={this.state.phone_number[index]}
                            name5={<a href={this.state.url[index]} target="_blank">Yelp</a>}
             />
        })
    }

    onMarkerClick (props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    onClose = props => {
        if(this.state.showingInfoWindow){
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    //added by joey
    createSideNav = () => {
        let side = [];

        for(let i = 0; i < this.state.truck_name.length; i++){
            let trucks = [];
            trucks.push(<a href={this.state.url[i]}> {this.state.truck_name[i]} </a>);
            
            if(this.state.rating[i] == "5/5"){
                if(this.state.price_range[i] == "$$")
                    if(this.state.payment_type[i] == "Credit Card")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FiveStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={TwoDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={CreditCard} width="50px"/>} {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
                    if(this.state.payment_type[i] == "Cash Only")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FiveStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={TwoDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
            }
            else if(this.state.rating[i] == "4.5/5"){
                if(this.state.price_range[i] == "$$$")
                    if(this.state.payment_type[i] == "Credit Card")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourHalfStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={ThreeDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={CreditCard} width="50px"/>} {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
                    if(this.state.payment_type[i] == "Cash Only")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourHalfStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={ThreeDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);

                if(this.state.price_range[i] == "$$")
                    if(this.state.payment_type[i] == "Credit Card")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourHalfStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={TwoDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={CreditCard} width="50px"/>} {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
                    if(this.state.payment_type[i] == "Cash Only")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourHalfStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={TwoDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);

                if(this.state.price_range[i] == "$")
                    if(this.state.payment_type[i] == "Credit Card")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourHalfStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={OneDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={CreditCard} width="50px"/>} {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
                    if(this.state.payment_type[i] == "Cash Only")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourHalfStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={OneDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
            }
            else if(this.state.rating[i] == "4/5"){
                if(this.state.price_range[i] == "$$$")
                    if(this.state.payment_type[i] == "Credit Card")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={ThreeDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={CreditCard} width="50px"/>} {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
                    if(this.state.payment_type[i] == "Cash Only")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={ThreeDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);

                if(this.state.price_range[i] == "$$")
                    if(this.state.payment_type[i] == "Credit Card")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={TwoDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={CreditCard} width="50px"/>} {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
                    if(this.state.payment_type[i] == "Cash Only")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={TwoDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);

                if(this.state.price_range[i] == "$")
                    if(this.state.payment_type[i] == "Credit Card")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={OneDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={CreditCard} width="50px"/>} {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
                    if(this.state.payment_type[i] == "Cash Only")
                    trucks.push(<p><small><b>Food Type:</b> {this.state.food_type[i]} <br /> <b>Rating:</b> {<img src={FourStarRating} width="100px"/>} <br /> <b>Price Range:</b> {<img src={OneDollar} width="100px"/> }
                    <br /> <b>Payment Type:</b> {<img src={MoneyIcon} width="40px"/>} <br /> <b>First Time Recommendation:</b> {this.state.food_suggest[i]}</small></p>);
            }

            {/* trucks.push(<p><small><strong>Food Type:</strong> {this.state.food_type[i]} <br /> Rating: {this.state.rating[i]} <br /> Price Range: {<img src={FiveStarRating} width="100px"/> }  */}
            {/* trucks.push(<p><small><strong>Food Type:</strong> {this.state.food_type[i]} <br /> Rating: {this.state.rating[i]} <br /> Price Range: {<img src={this.state.star_image} width="100px"/> }  */}
            // <br /> Payment Type: {this.state.payment_type[i]}
            // <br /> First Time Recommendation: {this.state.food_suggest[i]}</small></p>);
            side.push(<b2>{trucks}</b2>);
        }
        return side;
    };

    render() {

        geocoder = new this.props.google.maps.Geocoder();

        return (
            <div id="parent">

            <div class="sidenav">
                {this.createSideNav()}
            </div>
            <div class="main">
            </div>

            <div className="map-row">
                <div className="column-map">
                        <Map
                            google={this.props.google}
                            zoom={10}
                            style={mapStyles}
                            initialCenter={{
                                lat: this.state.lat,
                                lng: this.state.lng
                            }}
                        >
                            {this.displayMarkers(this.state.coordinates)}
                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                            >
                                <div>{this.state.selectedPlace.name} <br /> {this.state.selectedPlace.name1}
                                <br />{this.state.selectedPlace.name2 + " CA " + this.state.selectedPlace.name3}
                                <br />{this.state.selectedPlace.name4}
                                	<br /> {this.state.selectedPlace.name5} </div>
                            </InfoWindow>
                        </Map>
                </div>
            </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBTyNrlporN5pCSZKan4GgSr61wEsEY1GQ'
})(MapContainer);