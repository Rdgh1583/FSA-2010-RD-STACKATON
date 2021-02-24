import React from "react";
import Map from "./Map";
import Button from "@material-ui/core/Button";
// // import { Link } from "react-dom";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      place: [],
    };

    // this.toggle.bind = this.toggle.bind(this);
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      const id = this.props.match.params.id * 1;
      const response = await fetch(`/api/places/${id}`);
      const place = await response.json();
      this.setState({
        place,
      });
    }
  }

  // async componentDidUpdate(prevProps) {
  //   if (prevProps.match.params.id !== this.props.match.id) {
  //     const id = this.props.match.params.id * 1;
  //     const response = await fetch(`/api/places/${id}`);
  //     const place = await response.json();
  //     this.setState({
  //       place,
  //     });
  //   }
  // }

  async componentDidMount() {
    const id = this.props.match.params.id * 1;
    const response = await fetch(`/api/places/${id}`);
    const place = await response.json();
    this.setState({
      place,
    });
  }

  render() {
    // const favorites = places.filter((place) => place.isFavorite);
    // const center = favorites.length ? favorites[0] : places[0];

    const { place } = this.state;
    // console.log(place);
    if (!place) {
      return null;
    }

    return (
      <div className="details">
        <h1> {place.name}</h1>
        <p> Bags left: {place.stock}</p>
        <p> Pick Up: {place.time}</p>
        <p> Price: {place.price}</p>
        <Button variant="outlined" size="small">
          Grab it
        </Button>
      </div>
    );
  }
}

export default Restaurant;
