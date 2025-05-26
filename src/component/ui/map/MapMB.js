import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default function Map() {
  const mapContainerRef = useRef();
  const mapRef = useRef();
  mapboxgl.accessToken =
    "pk.eyJ1IjoiamlyYWtyaXQiLCJhIjoiY21iNGU4NTF5MTVlOTJscTVvaHRleWVuYSJ9.HVdzGekTPvLCzwxcHVni5g";
  
    useEffect(() => {
    if (!mapboxgl.supported()) {
      alert("Your browser does not support Mapbox GL");
    } else {
      mapRef.current = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [-74.5, 40],
        zoom: 9,
      });
    }

    return () => mapRef.current.remove();
  }, []);

  return <div ref={mapContainerRef} id="map" style={{ height: "100%" }} />;
}
