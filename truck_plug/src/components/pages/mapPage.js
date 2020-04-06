import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import axios from 'axios';

const mapStyles = {
    width: '100%',
    height: '825px'
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
            places: [],
            addressList: [],
            truck_name: [],
            url: []
        }
    }

    componentDidMount () {
        this.plotPoints();
		this.getTruckName();
		this.getURL();
    }

	getTruckName = () => {
        fetch('/api/truck_name')
            .then(res => res.json())
            .then(res => {
                var truck_name = res.map(r => r.truck_name);
                this.setState({truck_name});
            });
    };

    getURL = () => {
        fetch('/api/url')
            .then(res => res.json())
            .then(res => {
                var url = res.map(r => r.url);
                this.setState({url});
            });
    };

    plotPoints () {
        let places = [];
        let locationData = [];

        //Fetch address from database...runs from address file in server folder
        fetch('/api/address')
            .then(res => res.json())
            .then(res => {
                let addressList = res.map(r => r.address);
                this.setState({addressList});
                for (let i = 0; i < addressList.length; i++) {
                    locationData.push(this.findLatLang(addressList[i], geocoder))
                }
                //Extracts geocodes from a promise stores it into array
                Promise.all(locationData)//Do fetch within Promise combine getPoints
                    .then((returnVals) =>{
                        returnVals.forEach((latLng) => {
                            let place = {
                                latitude: latLng[0],
                                longitude: latLng[1]
                            };
                            places.push(place);
                        });
                        //places now populated
                        this.setState(() => {
                            return {
                                places: places
                            }
                        });

                    });
            });
    }

    findLatLang(address, geocoder) {
        console.log(address);
        return new Promise(function(resolve, reject) {
            geocoder.geocode({
                'address': address
            }, function(results, status) {
                if (status === 'OK') {
                    console.log(results);
                    resolve([results[0].geometry.location.lat(), results[0].geometry.location.lng()]);
                } else {
                    reject(new Error('Couldnt\'t find the location ' + address));
                }
            })
        })
    }

    displayMarkers (stores) {
        return stores.map((place, index) => {
            return <Marker key={index} id={index} position={{
                lat: place.latitude,
                lng: place.longitude
            }}
                           onClick={this.onMarkerClick}
                            name={this.state.truck_name[index]}
							name1={this.state.addressList[index]}
                            name3={<a href={this.state.url[index]} target="_blank">Yelp</a>}
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

    render() {

        geocoder = new this.props.google.maps.Geocoder();

        return (
            <div id="parent">

            <div class="sidenav">
            <b2>1) Hawaiian Hot Chicken</b2>
            <p><small>Hawaiian</small></p>

            <b2>2) 405 Teppanyaki</b2>
            <p><small>Japanese</small></p>

            <b2>3) Birrieria San Marcos</b2>
            <p><small>Mexican</small></p>

            <b2>4) Keep On Grubbin'</b2>
            <p><small>Burgers</small></p>

            <b2>5) Chick Stop</b2>
            <p><small>American</small></p>

            <b2>6) Godfather Truck</b2>
            <p><small>American</small></p>

            <b2>7) Leos Taco Truck</b2>
            <p><small>Mexican</small></p>

            <b2>8) Paratta</b2>
            <p><small>Middle Eastern</small></p>

            <b2>9) Keep On Grubbin</b2>
            <p><small>American</small></p>

            <b2>10) Fettes Schwein</b2>
            <p><small>American</small></p>

            <b2>11) Daniels Food Truck</b2>
            <p><small>Mexican</small></p>

            <b2>12) Mariscos El Sabroso</b2>
            <p><small>Mexican</small></p>

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
                            {this.displayMarkers(this.state.places)}
                            <InfoWindow
                                marker={this.state.activeMarker}
                                visible={this.state.showingInfoWindow}
                                onClose={this.onClose}
                            >
                                <div>{this.state.selectedPlace.name} <br /> {this.state.selectedPlace.name1}
                                	<br /> {this.state.selectedPlace.name3} </div>
                            </InfoWindow>
                        </Map>
                </div>
            </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ''
})(MapContainer);