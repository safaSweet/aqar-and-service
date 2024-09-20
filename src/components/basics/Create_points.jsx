import React, { useState, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const API_KEY = 'AIzaSyBL-faEkLgBmft3HK3Joy393GGVNAmvM9M'; // Replace with your API key

const MapWithAddPoints = ({ onMarkersChange }) => {
  const [marker, setMarker] = useState(null);

  const mapContainerStyle = {
    height: '400px',
    width: '800px'
  };

  const handleMapClick = useCallback((event) => {
    const newMarker = { lat: event.latLng.lat(), lng: event.latLng.lng() };
    setMarker(newMarker);
    // Update map center directly to the clicked point
    onMarkersChange([newMarker]); // Pass the marker to the parent component
  }, [onMarkersChange]);

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={marker || { lat: 33.53693912193568, lng: 36.36467669087099 }} // Use marker position if available, otherwise default center
        zoom={20}
        onClick={handleMapClick}
      >
        {marker && <Marker position={marker} />}
      </GoogleMap>
    </LoadScript>
  );
}

export default MapWithAddPoints;
