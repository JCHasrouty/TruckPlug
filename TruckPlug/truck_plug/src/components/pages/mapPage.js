import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '300px'
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
            places: []
        }
    }

    componentDidMount () {
        this.plotPoints();
    }

    plotPoints () {
        let places = [];
        let locationData = [];

        //Fetch address from database...runs from address file in server folder
        fetch('/api/address')
            .then(res => res.json())
            .then(res => {
                let addressList = res.map(r => r.address);
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
                           onClick={() => console.log("You clicked me!")} />
        })
    }

    onMarkerClick (props, marker, e) {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    render() {

        geocoder = new this.props.google.maps.Geocoder();
        return (
            <div className="container place-map">
                <div className="row">
                    <div className="col-md-12">
                        <Map
                            google={this.props.google}
                            zoom={8}
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
                            >
                                <div>Your Location Here!</div>
                            </InfoWindow>
                        </Map>
                    </div>
                </div>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    //Insert api Key here
})(MapContainer);