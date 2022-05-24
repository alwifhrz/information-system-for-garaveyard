import React from 'react';
import pic from "./logofix.jpg";
import { Link } from "react-router-dom"; 

const Ula=()=> {
  return (
      <>
  <div id="awal">
    <h1> MAQBARAH </h1>
    <h2>Sistem Informasi dan Navigasi Makam</h2>
    <h3 class="logo">
      <img src={pic}/>
    </h3>
    <h4>
    <Link to="/Sani">
        <button class="lokasi">
            Cari Lokasi Makam
        </button>
    </Link>
    </h4>
  </div>
  </>
  )
}
 
export default Ula;
