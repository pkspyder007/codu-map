import React from 'react'
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

class Map extends React.Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      currentImg: props.title
    });
  }

  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div className="map">
        <LoadScript googleMapsApiKey="AIzaSyBpIwkBrzchs9ICE4tdERb-8tuZV1R8yl8">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={2.6}
            onClick={this.onMapClicked}
          >
            {members.map((member, idx) => (
              <Marker
                key={idx}
                position={member.position}
                title={member.githubUsername}
                name={member.name}
                onClick={this.onMarkerClick}
                // name={`${member.name}'s Location`}
              >
              { this.state.showingInfoWindow &&
                <InfoWindow
                  visible={member.showInfoVisible}
                  position={member.position}
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
              }
              </Marker>
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    )
  }
}

export default React.memo(Map)