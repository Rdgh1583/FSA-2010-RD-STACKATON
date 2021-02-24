import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Button from "@material-ui/core/Button";

export default function Map(props) {
  const [viewport, setViewPort] = React.useState({
    latitude: 40.741895,
    longitude: -73.989308,
    width: "100vw",
    height: "50vw",
    zoom: 10,
  });
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoicmRlbWFubyIsImEiOiJja2xpOGxzcTgyZnRiMm9wY2JvaXVjeTN3In0.r38uSvzLc3pPEAztrwFJdA"
        }
        mapStyle="mapbox://styles/rdemano/cklilz9gu02it17o8aayfruox"
        onViewportChange={(viewport) => {
          setViewPort(viewport);
        }}
      >
        {" "}
        {props.places.map((place) => (
          <Marker
            key={place.id}
            latitude={Number(place.latitude)}
            longitude={Number(place.longitude)}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                setSelectedRestaurant(place);
              }}
              className="marker-btn"
              color="white"
            >
              <img src="/scooter.svg" />
            </button>
          </Marker>
        ))}
        {selectedRestaurant && (
          <Popup
            latitude={Number(selectedRestaurant.latitude)}
            longitude={Number(selectedRestaurant.longitude)}
            onClose={() => {
              setSelectedRestaurant(null);
            }}
          >
            <div>
              <h3>{selectedRestaurant.name}</h3>
              <p> Bags left: {selectedRestaurant.stock}</p>
              <p> Pick Up: {selectedRestaurant.time}</p>
              <p> Price: {selectedRestaurant.price}</p>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}
