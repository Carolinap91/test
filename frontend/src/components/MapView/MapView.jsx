import "leaflet/dist/leaflet.css";
import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

export const MapView = () => {
  // Coordenadas de ubicación inicial del mapa
  const initialPosition = [-33.45694, -70.64827];
  const [markerPosition, setMarkerPosition] = useState(null);

  const AddMarkerOnClick = () => {
    useMapEvents({
      click: (e) => {
        setMarkerPosition([e.latlng.lat, e.latlng.lng]);
      },
    });
    return null;
  };

  return (
    <MapContainer
      center={initialPosition}
      zoom={10}
      style={{ height: "200px", width: "400px" }}
    >
      {/* Agrega un proveedor de mapas, en este caso, usamos OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* Agrega un marcador en la ubicación inicial */}
      <Marker
        position={[-33.45694, -70.64827]}
        // icon={markerIcon}
      >
        <Popup>
          <b>First Marker</b>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapView;
