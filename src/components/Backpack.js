import React from "react";
import { connect } from "react-redux";
import { fetchPlaces } from "../store/places";

class Backpack extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await this.props.getPlaces();
  }

  render() {
    const { places } = this.props;
    const order = places.reduce(
      (acc, place) => (acc += Number(place.amount)),
      0
    );
    console.log(typeof order);
    return (
      <div className="backpack">
        <h2> In Your BackPack: {order}</h2>
      </div>
    );
  }
}

const mapToDispatch = (dispatch) => {
  return {
    getPlaces: () => dispatch(fetchPlaces()),
  };
};

export default connect((state) => state, mapToDispatch)(Backpack);
