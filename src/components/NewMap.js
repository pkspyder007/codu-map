import React, { useState } from 'react'
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import members from "../members";

const containerStyle = {
  width: '100%',
  height: '700px'
};

const center = {
  lat: 26,
  lng: 10
};

const Map = () => {
  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };
  return (
    <div className="Map">
      <LoadScript googleMapsApiKey="AIzaSyBpIwkBrzchs9ICE4tdERb-8tuZV1R8yl8">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2.6}
          onClick={() => setActiveMarker(null)}
        >
          {members.map((member, id) => (
            <Marker
              key={id}
              position={member.position}
              title={member.githubUsername}
              name={member.name}
              onClick={() => handleActiveMarker(id)}
            >
              {activeMarker === id ? (
                <InfoWindow
                  key={id}
                  position={member.position}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <div>
                    <img
                      alt={`User Icon for ${member.name}`}
                      src={`https://github.com/${member.githubUsername}.png`}
                      className="UserCard__image"
                    />
                    <p>{member.location}</p>
                  </div>
                </InfoWindow>
              ) : null}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default Map;