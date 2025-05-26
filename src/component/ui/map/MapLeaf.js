import { MapContainer, TileLayer } from "react-leaflet";
import React, { useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function Map({ height, width }) {
  const mapRef = useRef(null);
  const latitude = 22.28;
  const longitude = 114.2;

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      ref={mapRef}
      style={{ height: height, width: width }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Additional map layers or components can be added here */}
    </MapContainer>
  );
}
