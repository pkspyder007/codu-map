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

function Map() {
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
              //onClick={onMarkerClick} onMarkerClick is undefined
              // name={`${member.name}'s Location`}
            >
              {/* <InfoWindow //You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.
                //marker={this.state.activeMarker}
                //visible={this.state.showingInfoWindow}
                  anchor={0}
                >
                <div>
                  <img
                    alt={`User Icon for ${member.name}`}
                    src={`https://github.com/${member.githubUsername}.png`}
                    className="UserCard__image"
                  />
                  <p>{member.location}</p>
                </div>
              </InfoWindow> */}
            </Marker>
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  )
}

export default React.memo(Map)