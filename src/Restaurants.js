import React from "react";
import Map from "./Map";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Restaurants extends React.Component {
  constructor() {
    super();

    this.state = {
      places: [],
    };
    // this.toggle.bind = this.toggle.bind(this);
  }

  // async toggle(place) {
  //   const response = await fetch(`/api/places/${place.id}`, {
  //     method: "PUT",
  //     body: JSON.stringify({ isFavorite: !place.isFavorite }),
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //   });
  //   const data = await response.json();
  //   const places = this.state.places.map((_place) =>
  //     _place.id === data.id ? data : _place
  //   );
  //   this.setState({ places });
  // }

  async componentDidMount() {
    const response = await fetch("/api/places");
    const places = await response.json();
    // console.log(places);

    this.setState({
      places,
    });
  }

  render() {
    const { places } = this.state;
    // const favorites = places.filter((place) => place.isFavorite);
    // const center = favorites.length ? favorites[0] : places[0];

    return (
      <div className="container">
        <h1>Grab Bag</h1>
        <Map places={places} />
        <ul>
          {places.map((place) => {
            return (
              <li key={place.id}>
                {/* <a href={`/api/places/${place.id}`}> {place.name}</a> */}
                <Link to={`/places/${place.id}`}>{place.name}</Link>
                <p> Bags left: {place.stock}</p>
                <p> Pick Up: {place.time}</p>
                <p> Price: {place.price}</p>
                <Button variant="outlined" size="small">
                  Grab it
                </Button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Restaurants;
