import React, { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { useSelector } from "react-redux";
import { CModal, CModalBody, CModalHeader, CTooltip } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import * as icon from "@coreui/icons";
const API_KEY = "AIzaSyBL-faEkLgBmft3HK3Joy393GGVNAmvM9M"; // ضع المفتاح الخاص بك هنا

const ShowMap = ({ lat, long, id }) => {
  const [visible, setVisible] = useState(false);
  // const position = useSelector(
  //   (state) => state.Selling.get_properties.data
  // );
  // console.log('position',position)
  const mapContainerStyle = {
    height: "400px",
    width: "800px",
  };

  const center = {
    lat: lat,
    lng: long,
  };
  const markers = [{ id: id, position: { lat: lat, lng: long } }];

  return (
    <>
      <CTooltip content="عرض الموقع" placement="bottom">
        <CIcon icon={icon.cilMap} size="xl" onClick={() => setVisible(true)} />
      </CTooltip>
      <CModal visible={visible} onClose={() => setVisible(false)}>
        <LoadScript googleMapsApiKey={API_KEY}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={center}
            zoom={20}
          >
            {markers.map((marker) => (
              <Marker key={marker.id} position={marker.position} />
            ))}
          </GoogleMap>
        </LoadScript>
      </CModal>
    </>
  );
};

export default ShowMap;
