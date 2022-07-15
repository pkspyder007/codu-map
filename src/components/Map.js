//import React, { Component } from "react";
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
//import { members } from "../members";

/*
export class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
    currentImg: ""
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      currentImg: props.title
    });
  }

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    return (
      <Map google={this.props.google} onClick={this.onMapClicked} zoom={1}>
        <Marker
          onClick={this.onMarkerClick}
          name={"Codu Community"}
          title="codu-code"
          position={{ lat: 53.3498, lng: 6.2603 }}
        />

        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
        >
          <div>
            <img
              alt={`${this.state.currentImg}'s github avatar`}
              src={`https://github.com/${this.state.currentImg}.png`}
              className="UserCard__image"
            />
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>

        {members.map((member, idx) => (
          <Marker
            key={idx}
            position={member.position}
            title={member.githubUsername}
            name={member.name}
            onClick={this.onMarkerClick}
            // name={`${member.name}'s Location`}
          >
            {/* <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                <img
                  alt={`User Icon for ${member.name}`}
                  src={`https://github.com/${member.githubUsername}.png`}
                  className="UserCard__image"
                />
                <p>{member.location}</p>
              </div>
            </InfoWindow> *//*}
          </Marker>
        ))}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBpIwkBrzchs9ICE4tdERb-8tuZV1R8yl8",
})(MapContainer);
*/