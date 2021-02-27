import React from "react";
import Map from "./Map";
import Button from "@material-ui/core/Button";
// // import { Link } from "react-dom";
import { updatePlace, setPlace } from "../store/places";
import { connect } from "react-redux";
import { Snackbar } from "@material-ui/core";
import GrabIt from "./GrabIt";

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
    // console.log(prevProps.match.params.id);
    // console.log(this.props.match.params.id);
    // if (prevProps.match.params.id !== this.props.match.id) {
    //   const id = this.props.match.params.id * 1;
    //   const response = await fetch(`/api/places/${id}`);
    //   const place = await response.json();
    //   this.setState({
    //     place,
    //   });
    // }
  }

  async componentDidMount() {
    const id = this.props.match.params.id * 1;
    const response = await fetch(`/api/places/${id}`);
    const place = await response.json();
    console.log(id);
    this.setState({
      place,
    });
    // console.log(this.props.match.params.id * 1);
    // const id = this.props.match.params.id * 1;
    // console.log(id);
    // const place = await this.props.setPlace(id);
    // console.log(place);
    // this.setState({
    //   place,
    // });
    // await this.props.setPlace(id);
  }

  render() {
    const { place } = this.state;
    console.log(place);

    const placeId = place.id;
    const order = place.order;
    const { open } = this.state;
    const { handleClose, handleClick } = this;
    // console.log(placeId);

    if (!place) {
      return null;
    }

    return (
      <div className="details">
        <h1> {place.name}</h1>
        <p> Address: {place.address}</p>
        <p> Bags left: {place.stock}</p>
        <p> Pick Up: {place.time}</p>
        <p> Price: {place.price}</p>
        <p> Phone: {place.phone}</p>
        <p> Email: {place.email}</p>
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
        <GrabIt placeId={place.id} order={order + place.amount} />
      </div>
    );
  }
}

// export default Restaurant;

const mapDispatch = (dispatch) => {
  return {
    setPlace: (id) => dispatch(setPlace(id)),
    updatePlace: (placeId, stock, amount) =>
      dispatch(updatePlace(placeId, stock, amount)),
    // updateOrder: (placeId, amount, order) =>
    //   dispatch(updateOrder(placeId, amount, order)),
  };
};

export default connect((state) => state, mapDispatch)(Restaurant);
