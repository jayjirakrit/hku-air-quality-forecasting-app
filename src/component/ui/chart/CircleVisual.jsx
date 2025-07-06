import GaugeComponent from "react-gauge-component";
import React, { memo } from "react";

function CircleVisual({aqhi}) {
  aqhi = aqhi ?? 0;
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
              limit: 3,
              color: "#00e400",
              showTick: true,
              tooltip: {
                text: "Good",
              },
            },
            {
              limit: 6,
              color: "#FFFF00",
              showTick: true,
              tooltip: {
                text: "Moderate",
              },
            },
            {
              limit: 10,
              color: "#FF7E00",
              showTick: true,
              tooltip: {
                text: "Unhealthy for Sensitive Groups",
              },
            },
            {
              limit: 20,
              color: "#FF0000",
              // showTick: true,
              tooltip: {
                text: "Unhealthy",
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
        value={aqhi}
        maxValue={20}
      />
    </>
  );
}

export default memo(CircleVisual);
