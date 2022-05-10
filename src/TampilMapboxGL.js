import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {TileLayer, Map, MapContainer } from "react-leaflet";
import RoutineMachine from "./RoutineMachine";
import ReactMapboxGl, {Layer, Feature } from "react-mapbox-gl";
// import 'leaflet/dist/leaflet.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Source } from "react-mapbox-gl";
import MapboxMap from 'react-mapbox-wrapper';

export default function App() {
  
  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')
  const [userLocation,setUserLocation] = useState({
      latitude: null,
      longitude: null,
  })

  

  // const Map = ReactMapboxGl({
  //   accessToken:
  //     'pk.eyJ1IjoiYWx3aWZocnoiLCJhIjoiY2wyMDg3MjJpMG8xNjNrb2FvMGxmazh1aCJ9.ax-8TdrG7GcB9o8_B8CnMA'
  // });

  // const MapboxDirection = ReactMapboxGl ({
  //   accessToken:
  //     'pk.eyJ1IjoiYWx3aWZocnoiLCJhIjoiY2wyMDg3MjJpMG8xNjNrb2FvMGxmazh1aCJ9.ax-8TdrG7GcB9o8_B8CnMA'
  // })
  const handleSetPosition = (position) => {
    setUserLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
    })
    }

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        setLatitude(queryParams.get("latitude"))
        setLongitude(queryParams.get("longitude"))
    },[])

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(handleSetPosition)
        }
    },[])

    // const origin = [setUserLocation];
    // const destination =[latitude, longitude];
    // const route = {
    //   'type': 'FeatureCollection',
    //   'features': [
    //   {
    //   'type': 'Feature',
    //   'geometry': {
    //   'type': 'LineString',
    //   'coordinates': [origin, destination]}
    //     }]
    //   };
    if (userLocation.latitude && userLocation.longitude)
    return ( 
      <div style={{ height: 600, width: 600 }}>
      <MapboxMap

        accessToken="pk.eyJ1IjoiYWx3aWZocnoiLCJhIjoiY2wyMDg3MjJpMG8xNjNrb2FvMGxmazh1aCJ9.ax-8TdrG7GcB9o8_B8CnMA"
        coordinates={{ lat: 48.872198, lng: 2.3366308 }}
        className="map-container"
            fullscreenControlPosition="top-left"
            navigationControlPosition="top-right"
            withCompass
            withZoom
            withFullscreen
      >
        {/* <RoutineMachine latitude={latitude} longitude={longitude} userLocation={userLocation}  />
        */}
      </MapboxMap>
    </div>
    );
}


    // <Map
    //   // doubleClickZoom={false}
    //   // id="mapbox.street"
    //   style='mapbox://styles/alwifhrz/cl24tkvv2000w14o57dykutia'
    //   containerStyle={{
    //     height: '100vh',
    //     width: '100vw'
    //   }}
      // maxNativeZoom={22}
      // center={[33.5024, 36.2988]}
      // maxZoom={22}
      // zoom={18}
      // accessToken= 'pk.eyJ1IjoiYWx3aWZocnoiLCJhIjoiY2wyMDg3MjJpMG8xNjNrb2FvMGxmazh1aCJ9.ax-8TdrG7GcB9o8_B8CnMA'
    // >  

    // <Layer type="fill" layout={{ 'icon-image': 'marker-15' }}> 
    //     <Feature coordinates={[-0.481747846041145, 51.3233379650232]} /> 
    //   </Layer>
        

      {/* <TileLayer 
      url="https://api.mapbox.com/styles/v4/alwifhrz/cl24tkvv2000w14o57dykutia/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiYWx3aWZocnoiLCJhIjoiY2wyMDg3MjJpMG8xNjNrb2FvMGxmazh1aCJ9.ax-8TdrG7GcB9o8_B8CnMA"
      attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      /> */}
     
        {/* <RoutineMachine latitude={latitude} longitude={longitude} userLocation={userLocation} /> */}
      // </Map>
    //   );
    // };

    // // <Map
    // // style url="mapbox://styles/alwifhrz/cl24tkvv2000w14o57dykutia"
    // // center={[-114.090194,51.066226]}
    // // containerStyle={{
    // //   height: "100vh",
    // //   width: "100vw" }}>
    // //     <Layer 
    // //       id = 'Polygon'
    // //       type= 'fill'
    // //       source= {{ //missing a bracket here
    // //         type = 'geojson', />


    // //   // </Map>