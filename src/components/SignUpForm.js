import React from "react";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import Button from "@material-ui/core/Button";
import { WebMercatorViewport } from "react-map-gl";
import { createPlace } from "../store/places";

class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      latitude: "",
      longitude: "",
      isFavorite: "",
      stock: "",
      time: "",
      price: "",
      amount: "",
      order: "",
      phone: "",
      email: "",
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(ev) {
    const change = {};
    change[ev.target.name] = ev.target.value;
    this.setState(change);
  }

  async onSubmit(ev) {
    ev.preventDefault();
    //this stops state from refreshing?
    try {
      await this.props.create(
        this.state.name,
        this.state.address,
        this.state.latitude,
        this.state.longitude,
        this.state.isFavorite,
        this.state.stock,
        this.state.time,
        this.state.price,
        this.state.amount,
        this.state.order,
        this.state.phone,
        this.state.email
      );
    } catch (er) {
      console.log("this is er", er);
      this.setState({ error: er });
    }
  }

  render() {
    const {
      name,
      address,
      latitude,
      longitude,
      isFavorite,
      stock,
      time,
      price,
      amount,
      order,
      phone,
      email,
    } = this.state;
    const { onSubmit, onChange } = this;
    return (
      <div className="signup">
        <h1>SELL YOUR SURPLUS FOOD, EASILY</h1>
        <form id="signup-form" onSubmit={onSubmit}>
          <TextField
            id="standard-basic"
            name="name"
            label="Name"
            value={name}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="address"
            label="Address"
            value={address}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="latitude"
            label="Latitude"
            value={latitude}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="longitude"
            label="Longitude"
            value={longitude}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="isfavorite"
            label="Is favorite"
            value={isFavorite}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="stock"
            label="Stock"
            value={stock}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="time"
            label="Time"
            value={time}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="price"
            label="price"
            value={price}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="amount"
            label="Amount"
            value={amount}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="order"
            label="Order"
            value={order}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="phone"
            label="Phone"
            value={phone}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <TextField
            id="standard-basic"
            name="email"
            label="Email"
            value={email}
            variant="outlined"
            onChange={onChange}
          ></TextField>
          <br />
          <Button type="submit" id="signup-button">
            Save Changes
          </Button>
        </form>
      </div>
    );
  }
}

const mapToDispatch = (dispatch, { history }) => {
  return {
    create: (
      name,
      address,
      latitude,
      longitude,
      isFavorite,
      stock,
      time,
      price,
      amount,
      order,
      phone,
      email
    ) =>
      dispatch(
        createPlace(
          name,
          address,
          latitude,
          longitude,
          isFavorite,
          stock,
          time,
          price,
          amount,
          order,
          phone,
          email,
          history
        )
      ),
  };
};
export default connect((state) => state, mapToDispatch)(SignUpForm);
