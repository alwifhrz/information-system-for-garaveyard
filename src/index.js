import React from 'react';
import ReactDOM from 'react-dom/client';
// import 'mapbox-gl/dist/mapbox-gl.css';
import './index.css';
import Ula from './Ula';
import Sani from './Sani';
import Map from './Map';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";
import MapTest from './MapTest';


const osm = document.getElementById('root');
const root = ReactDOM.createRoot(osm);

root.render(
  <React.StrictMode>
    
    <Router>
        <Routes>
            <Route path="/" element={<Ula />} />
            <Route path="/Sani" element={<Sani />} />
            <Route path="/Map" element={<Map />} />
            <Route path="/maptest" element={<MapTest />} />
        </Routes>
    </Router>
    
  </React.StrictMode>,
  
);

// const tampil = document.getElementById('map');
// const map = ReactDOM.createRoot(tampil);
// root.render(
//   <React.StrictMode>
//     <Map />
//   </React.StrictMode>,
  
// );

// const petunjuk = document.getElementById('instructions');
// const instructions = ReactDOM.createRoot(petunjuk);
// root.render(
//   <React.StrictMode>
//     <Instructions />
//   </React.StrictMode>,
  
// );