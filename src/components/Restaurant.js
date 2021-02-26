import React from "react";
import Map from "./Map";
import Button from "@material-ui/core/Button";
// // import { Link } from "react-dom";
import { updatePlace } from "../store/places";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place: [],
      open: false,
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }

  // this.toggle.bind = this.toggle.bind(this);

  async componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.id) {
      const id = this.props.match.params.id * 1;
      const response = await fetch(`/api/places/${id}`);
      const place = await response.json();
      this.setState({
        place,
      });
    }
  }

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
    const placeId = place.id;
    const { open } = this.state;
    const { handleClose, handleClick } = this;

    if (!place) {
      return null;
    }

    return (
      <div className="details">
        <h1> {place.name}</h1>
        <p> Bags left: {place.stock}</p>
        <p> Pick Up: {place.time}</p>
        <p> Price: {place.price}</p>
        <strong>
          <span
            onClick={() =>
              this.props.updatePlace(placeId, place.stock + 1, place.amount - 1)
            }
          >
            -{" "}
          </span>
        </strong>
        <input readOnly={true} value={place.amount} type="number" />
        <strong>
          <span
            onClick={() =>
              this.props.updatePlace(placeId, place.stock - 1, place.amount + 1)
            }
          >
            +{" "}
          </span>
        </strong>
        <Button variant="outlined" size="small" onClick={() => handleClick()}>
          Grab it
        </Button>
        <Snackbar
          style={{ padding: "2rem" }}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={open}
          message="KaAAAZZaaaaMMM!"
          autoHideDuration={2000}
          onClose={handleClose}
          style={{ backgroundColor: "#ffccaa" }}
        ></Snackbar>
      </div>
    );
  }
}

// export default Restaurant;

const mapDispatch = (dispatch) => {
  return {
    updatePlace: (placeId, stock, amount) =>
      dispatch(updatePlace(placeId, stock, amount)),
    // updateOrder: (placeId, amount, order) =>
    //   dispatch(updateOrder(placeId, amount, order)),
  };
};

export default connect((state) => state, mapDispatch)(Restaurant);
