import React from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";
import Button from "@material-ui/core/Button";
import { Snackbar } from "@material-ui/core";

export default function Map(props) {
  const [viewport, setViewPort] = React.useState({
    latitude: 40.741895,
    longitude: -73.989308,
    width: "100vw",
    height: "50vw",
    zoom: 10,
  });
  const [selectedRestaurant, setSelectedRestaurant] = React.useState(null);
  const [snackOpen, setSnackOpen] = React.useState(false);

  function handleClick() {
    React.useState({ open: true });
  }
  function handleClose() {
    React.useState({ open: false });
  }

  React.useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedRestaurant(null);
      }
    };
    window.addEventListener("keydown", listener);
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1IjoicmRlbWFubyIsImEiOiJja2xpOGxzcTgyZnRiMm9wY2JvaXVjeTN3In0.r38uSvzLc3pPEAztrwFJdA"
        }
        mapStyle="mapbox://styles/rdemano/ckllk3wu21eza17pap5jj3lrq"
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
              <img src="/spider.jpg" />
            </button>
          </Marker>
        ))}
        {selectedRestaurant && (
          <Popup
            latitude={Number(selectedRestaurant.latitude)}
            longitude={Number(selectedRestaurant.longitude)}
            // onClose={() => {
            //   setSelectedRestaurant(null);
            // }}
          >
            <div className="popup">
              <h3>{selectedRestaurant.name}</h3>
              <p> Address: {selectedRestaurant.address}</p>
              <p> Bags left: {selectedRestaurant.stock}</p>
              <p> Pick Up: {selectedRestaurant.time}</p>
              <p> Price: {selectedRestaurant.price}</p>
              <p> Phone: {selectedRestaurant.phone}</p>
              <p> Email: {selectedRestaurant.email}</p>
              <Button
                variant="outlined"
                size="small"
                onClick={() => setSnackOpen(true)}
              >
                Grab it
              </Button>
              <Snackbar
                style={{ padding: "2rem" }}
                anchorOrigin={{ horizontal: "center", vertical: "top" }}
                open={snackOpen}
                message="KaAAAZZaaaaMMM!!!!!"
                autoHideDuration={2000}
                onClose={() => setSnackOpen(false)}
                style={{ backgroundColor: "red" }}
              ></Snackbar>
              <div>
                <Button
                  variant="outlined"
                  size="small"
                  href={`/places/${selectedRestaurant.id}`}
                >
                  Info
                </Button>
              </div>
            </div>
          </Popup>
        )}
      </ReactMapGL>
    </div>
  );
}
