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
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {}
    };
  }

  handleMarkerClick = (member) => {
    return (
      <InfoWindow
        key={member.id}
        visible={this.state.showingInfoWindow}
        position={member.position}
        onCloseClick={() => this.handleInfoWindowClose(member.name)}
        onLoad={() => {
          this.setState ({
            showingInfoWindow: true,
            openInfoWindowId: member.id
          })
        }}
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
    )
  }

  handleInfoWindowClose = (name) => {
    if (this.state.showingInfoWindow && this.state.activeMarker.name === name) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  }

  handleMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
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
            onClick={this.handleMapClicked}
          >
            {members.map((member, id) => (
              <Marker
                key={id}
                position={member.position}
                title={member.githubUsername}
                name={member.name}
                onClick={this.handleMarkerClick(member)}
                // name={`${member.name}'s Location`}
              >
              </Marker>
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    )
  }
}

export default Map;