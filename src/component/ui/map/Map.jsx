import React, { useRef, useEffect, useMemo } from "react";
import * as maptilersdk from "@maptiler/sdk";
import "@maptiler/sdk/dist/maptiler-sdk.css";
import "./Map.css";

const defineColor = (aqi) => {
  switch(true) {
    case aqi <= 1: return '#3EC4F1';
    case aqi === 2: return '#2598C8';
    case aqi === 3: return '#1B6999';
    case aqi === 4: return '#EDEA3F';
    case aqi === 5: return '#FBCB33';
    case aqi === 6: return '#F59648';
    case aqi === 7: return '#EC6969';
    case aqi === 8: return '#E9222E';
    case aqi === 9: return '#CE222F';
    case aqi === 10: return '#CE222F';
    case aqi > 10: return '#610F15';
    default: return '#FFFFFF';
  }
}

export default function Map({ airQualityDataList, height, width }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const sourcesAdded = useRef(new Set());
  const layersAdded = useRef(new Set());

  maptilersdk.config.apiKey = "2EZVNaofrVVm5yD2KqD0";

  const circleDataList = useMemo(() => {
    return airQualityDataList.map((aq) => ({
      id: `hk-${aq.station.replace(/\//g, '-')}`, // Replace slashes to avoid ID issues
      lat: aq.latitude,
      lng: aq.longitude,
      radiusKm: 5,
      text: aq.aqi,
      color: defineColor(aq.aqi),
      fillOpacity: 0.85,
    }));
  }, [airQualityDataList]);

  useEffect(() => {
    if (map.current) return;

    map.current = new maptilersdk.Map({
      container: mapContainer.current,
      style: maptilersdk.MapStyle.WINTER,
      center: [114.16, 22.28],
      zoom: 12,
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
        sourcesAdded.current.clear();
        layersAdded.current.clear();
      }
    };
  }, []);

  useEffect(() => {
    if (!map.current) return;

    const updateMapData = () => {
      // Remove existing layers first
      layersAdded.current.forEach(layerId => {
        if (map.current.getLayer(layerId)) {
          map.current.removeLayer(layerId);
        }
      });
      layersAdded.current.clear();

      // Remove existing sources
      sourcesAdded.current.forEach(sourceId => {
        if (map.current.getSource(sourceId)) {
          map.current.removeSource(sourceId);
        }
      });
      sourcesAdded.current.clear();

      // Add new sources and layers
      circleDataList.forEach((circle) => {
        const sourceId = `circle-source-${circle.id}`;
        const circleLayerId = `circle-layer-${circle.id}`;
        const textLayerId = `circle-text-${circle.id}`;

        // Only add source if it doesn't exist
        if (!map.current.getSource(sourceId)) {
          map.current.addSource(sourceId, {
            type: "geojson",
            data: {
              type: "Feature",
              geometry: {
                type: "Point",
                coordinates: [circle.lng, circle.lat],
              },
              properties: {
                text: circle.text,
              },
            },
          });
          sourcesAdded.current.add(sourceId);
        }

        // Add circle layer
        if (!map.current.getLayer(circleLayerId)) {
          map.current.addLayer({
            id: circleLayerId,
            type: "circle",
            source: sourceId,
            paint: {
              "circle-radius": {
                stops: [
                  [0, 0],
                  [20, circle.radiusKm * 1000],
                ],
                base: 2,
              },
              "circle-color": circle.color,
              "circle-opacity": circle.fillOpacity,
              "circle-stroke-color": circle.color,
              "circle-stroke-width": 2,
            },
          });
          layersAdded.current.add(circleLayerId);
        }

        // Add text layer
        if (!map.current.getLayer(textLayerId)) {
          map.current.addLayer({
            id: textLayerId,
            type: "symbol",
            source: sourceId,
            layout: {
              "text-field": ["get", "text"],
              "text-size": 14,
              "text-allow-overlap": true,
              "text-ignore-placement": true,
              "text-anchor": "center",
              "text-justify": "center",
            },
            paint: {
              "text-color": "#ffffff",
              "text-halo-color": circle.color,
              "text-halo-width": 1,
            },
          });
          layersAdded.current.add(textLayerId);
        }
      });
    };

    if (map.current.isStyleLoaded()) {
      updateMapData();
    } else {
      map.current.once('load', updateMapData);
    }
  }, [circleDataList]);

  return (
    <div className="map-wrap" style={{ height, width }}>
      <div ref={mapContainer} className="map" />
    </div>
  );
}