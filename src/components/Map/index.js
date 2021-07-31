import React, { useEffect, useState } from "react";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

// Styles
import { Content } from "./Map.styles";

const getLocation = function () {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (location) => location,
      () => [51.505, -0.09]
    );
  }
};

const Map = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const location = getLocation();
  }, []);

  return (
    <Content>
      <MapContainer
        id="map"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </MapContainer>
    </Content>
  );
};

export default Map;
