import GaugeComponent from "react-gauge-component";
import React, { memo } from "react";

function CircleVisual() {
  return (
    <>
      <GaugeComponent
        type="semicircle"
        arc={{
          width: 0.45,
          padding: 0.005,
          cornerRadius: 1,
          // gradient: true,
          subArcs: [
            {
              limit: 50,
              color: "#00e400",
              showTick: true,
              tooltip: {
                text: "Good",
              },
            },
            {
              limit: 100,
              color: "#FFFF00",
              showTick: true,
              tooltip: {
                text: "Moderate",
              },
            },
            {
              limit: 150,
              color: "#FF7E00",
              showTick: true,
              tooltip: {
                text: "Unhealthy for Sensitive Groups",
              },
            },
            {
              limit: 200,
              color: "#FF0000",
              showTick: true,
              tooltip: {
                text: "Unhealthy",
              },
            },

            {
              limit: 300,
              showTick: true,
              color: "#99004C",
              tooltip: {
                text: "Very Unhealthy",
              },
            },
            {
              limit: 500,
              showTick: true,
              color: "#4C0026",
              tooltip: {
                text: "Hazardous",
              },
            },
          ],
        }}
        pointer={{
          color: "#345243",
          length: 0.8,
          width: 15,
          // elastic: true,
        }}
        labels={{
          valueLabel: {
            formatTextValue: (value) => "",
          },
          tickLabels: {
            type: "outer",
            defaultTickValueConfig: {
              formatTextValue: (value) => value,
              style: { fontSize: 20, fontWeight: "bold", fill: "#000000" },
            },
            defaultTickLineConfig: {
              // hide: true,
            },
          },
        }}
        minValue={0}
        value={25}
        maxValue={500}
      />
    </>
  );
}

export default memo(CircleVisual);