import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import features from "../public/features.json";

const cordobaCoords = [-64.1836, -31.3989];

const Map = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [58, 20, 0],
        scale: 600,
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Geographies geography={features}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#2C065D"
              stroke="#FFFFFF"
              strokeWidth={0.5}
            />
          ))
        }
      </Geographies>
      <Annotation
        subject={cordobaCoords}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FFFFFF",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#FFFFFF">
          {"Córdoba"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;
