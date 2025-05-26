import React, { useRef, useEffect } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.css";

export default function Map({ height, width }) {
  const latitude = 22.28;
  const longitude = 114.2;
  const mapContainer = useRef(null);
  const map = useRef(null);
  const markerRef = useRef(null);
  const tokyo = { lng: longitude, lat: latitude };
  const zoom = 14;
  maptilersdk.config.apiKey = "2EZVNaofrVVm5yD2KqD0";

  useEffect(() => {
    if (map.current) return; // stops map from intializing more than once

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.WINTER,
      center: [tokyo.lng, tokyo.lat],
      zoom: zoom,
    });

    // Add marker after map loads
    map.current.on("load", () => {
      markerRef.current = new maptilersdk.Marker({ color: "#FF0000" })
        .setLngLat([longitude, latitude])
        .addTo(map.current);
    });

    // Cleanup function
    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [tokyo.lng, tokyo.lat, zoom]);

  return (
    <div className="map-wrap" style={{ height: height, width: width }}>
      <div ref={mapContainer} className="map" />
    </div>
  );
}
