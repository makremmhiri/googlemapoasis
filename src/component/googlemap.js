import React from "react";
import Cust from "../img/red.png";
import { GoogleMap, LoadScript, MarkerF,Polygon,Circle } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

const center = {
  lat: -34.397, // Example latitude
  lng: 150.644, // Example longitude
};
const oran = {
  lat: 33.8829, // Example latitude
  lng: 10.0755, // Example longitude
};
const polygonOptions = {
  paths: [
    { lat: 33.8829, lng: 10.0755 }, // Example point 1
    { lat: 33.8929, lng: 10.0755 }, // Example point 2
    { lat: 33.8929, lng: 10.0855 }, // Example point 3
    { lat: 33.8829, lng: 10.0855 }, // Example point 4
  ],
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
};
const circleOptions = {
  center: { lat: 33.8829, lng: 10.0755 }, // Circle center
  radius: 5000, // Circle radius in meters
  strokeColor: "#FF0000",
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: "#FF0000",
  fillOpacity: 0.35,
};




function MyComponent() {
  const handleMarkerClick = () => {
    alert("Marker clicked!");
    // You can perform other actions here, such as opening an info window
  };
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBOiPCKHBA-w8NaEi9bSOUNDJhQJLccGqk
    "
    >
      <GoogleMap mapContainerStyle={containerStyle} center={oran} zoom={13.5}>
        {/* MarkerF */}
        <MarkerF position={center} onClick={handleMarkerClick} />
        <MarkerF position={oran} icon={Cust} />
        {/* Polygon */}
        <Polygon options={polygonOptions} />
        {/* Circle */}
        <Circle options={circleOptions} />
      </GoogleMap>
    </LoadScript>
  );
}

export default React.memo(MyComponent);
