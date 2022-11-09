import React, {Component} from 'react'
import { Map, GoogleApiWrapper } from 'google-maps-React';

export class MapComponent extends Component {

    render() {

        return (<div className="map-area">

                <Map

                    google={this.props.google}

                    zoom={14}

                    center={{

                        lat: 47.444,

                        lng: -122.176

                    }}

                ></Map>

            </div>);

    }

}

export default GoogleApiWrapper({

    apiKey: ('AIzaSyB7Zi4HBHDnys9W5iAswM7QU7rQE0OZYiY')

})(MapComponent);
