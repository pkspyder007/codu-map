import React from 'react'
import { GoogleMap, LoadScript, InfoWindow, Marker } from '@react-google-maps/api';
import members from "../members";

const containerStyle = {
  width: '100%',
  height: '700px'
};

const center = {
  lat: 26,
  lng: 0
};

const Map = () => {
  const onMarkerClick = (member) => {
    member.showInfoVisible = true;
  }
  return (
    <div className="map">
      <LoadScript
        googleMapsApiKey="AIzaSyBpIwkBrzchs9ICE4tdERb-8tuZV1R8yl8"
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={2.6}
        >
          {members.map((member, idx) => (
            <Marker
              key={idx}
              position={member.position}
              title={member.githubUsername}
              name={member.name}
              onClick={onMarkerClick(member)}
              // name={`${member.name}'s Location`}
            >
              <InfoWindow
                visible={member.showInfoVisible}
                position={
                  { 
                    lat: member.position.lat,
                    lng: member.position.lng
                  }
                }
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
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default React.memo(Map)