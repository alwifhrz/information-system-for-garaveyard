import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import {TileLayer, Map, MapContainer, Marker } from "react-leaflet";
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

  const Map = ReactMapboxGl({
    accessToken:
      'pk.eyJ1IjoiYWx3aWZocnoiLCJhIjoiY2wyMDg3MjJpMG8xNjNrb2FvMGxmazh1aCJ9.ax-8TdrG7GcB9o8_B8CnMA'
  });

  // const MapboxDirection = ({
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

    
    if (userLocation.latitude && userLocation.longitude)
    return ( 
    <Map
    // doubleClickZoom={false}
    // id="mapbox.street"
    style='mapbox://styles/alwifhrz/cl24tkvv2000w14o57dykutia'
    containerStyle={{
      height: '100vh',
      width: '100vw'
    }}
    // maxNativeZoom={22}
    // center={[33.5024, 36.2988]}
    // maxZoom={22}
    // zoom={18}
    // accessToken= 'pk.eyJ1IjoiYWx3aWZocnoiLCJhIjoiY2wyMDg3MjJpMG8xNjNrb2FvMGxmazh1aCJ9.ax-8TdrG7GcB9o8_B8CnMA'
    >
    </Map>
    );
  }
