import {useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'; 
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'
import './index.css'
mapboxgl.accessToken = 'pk.eyJ1IjoiYWx3aWZocnoiLCJhIjoiY2wyZ3M0dmJ2MDZ3ZzNqdHBrdG9oMmNnZCJ9.gssBFqCcLMPL1kU3B6tq_A';

const MapTest = () => {
  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')
  const [userLocation,setUserLocation] = useState({
      latitude: null,
      longitude: null,
  })

  // userlocation lat dan lng
  const handleSetPosition = (position) => {
      setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
      })
    }

  // // ambil data makam lat dan lng dari query params
  useEffect(() => {
      const queryParams = new URLSearchParams(window.location.search)
      setLatitude(queryParams.get("latitude"))
      setLongitude(queryParams.get("longitude"))
  },[])

//melakukan sesuatu dengan lat dan long yg sudah diambil
  useEffect(() => {
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(handleSetPosition)
      }
  },[])

  useEffect(() => {
      if (userLocation && latitude && longitude) {
        const map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/mapbox/streets-v9',
            center: ([longitude, latitude]), // starting position
            zoom: 13
        });

        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/walking',
            container : 'directions',
            alternatives: 'true',
        });

        map.on('load', function() {
            directions.setOrigin([userLocation.longitude, userLocation.latitude]); 
            directions.setDestination([longitude, latitude]); 
        });

        map.scrollZoom.enable();
        map.addControl(directions, 'top-left');
      }
    },[userLocation,latitude,longitude])

    return (
        <div id='map'>
        </div>
    )
}

export default MapTest;