import React from 'react';
import {GoogleMapLoader, GoogleMap, Marker} from "react-google-maps";
const Map = (props) => {
    return (
      <div>
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: "250px",
              width:"300px"
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            defaultZoom={10}
            defaultCenter={{ lat: props.lat, lng: props.lng }}
          >
          </GoogleMap>
        }
      />
      </div>
    );
}
export default Map;