import React from "react";
import { connect } from "react-redux";
import { addToBag } from "../store/places";
import Button from "@material-ui/core/Button";
import { Snackbar } from "@material-ui/core";
// import { Alert } from '@material-ui/lab';

class GrabIt extends React.Component {
  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = { open: false };
  }
  handleClick() {
    this.setState({ open: true });
  }
  handleClose() {
    this.setState({ open: false });
  }
  render() {
    const { order, placeId, addToBag } = this.props;
    // const orderId = cart.id;
    const { open } = this.state;
    const { handleClose, handleClick } = this;
    return (
      <>
        <Button
          variant="contained"
          onClick={() => {
            addToBag(placeId, order);
            handleClick();
          }}
        >
          Grab It
        </Button>
        <Snackbar
          style={{ padding: "2rem" }}
          anchorOrigin={{ horizontal: "center", vertical: "top" }}
          open={open}
          message="KaAAAZZaaaaMMM!!!!!"
          autoHideDuration={2000}
          onClose={handleClose}
          style={{ backgroundColor: "#ffccaa" }}
        >
          {/* <Alert
            variant="filled"
            open={open}s
            onClose={handleClose}
            severity="success"
          >
            Plant added to cart!
          </Alert> */}
        </Snackbar>
      </>
    );
  }
}
const mapDispatch = (dispatch) => {
  return {
    addToBag: (placeId, order) => dispatch(addToBag(placeId, order)),
  };
};

export default connect((state) => state, mapDispatch)(GrabIt);
