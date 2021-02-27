import React from "react";
import Map from "./Map";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// import { fetchPlaces, updatePlace } from "../store/places";
import { fetchPlaces } from "../store/places";
import { Snackbar } from "@material-ui/core";
// import { Alert } from "@material-ui/lab";
import OpenForm from "./OpenForm";

// import { makeStyles } from "@material-ui/core/styles";
// import GridList from "@material-ui/core/GridList";
// import GridListTile from "@material-ui/core/GridListTile";
// import GridListTileBar from "@material-ui/core/GridListTileBar";
// import IconButton from "@material-ui/core/IconButton";

// import StarBorderIcon from "@material-ui/icons/StarBorderIcon";
// import tileData from "./tileData";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   gridList: {
//     flexWrap: "nowrap",
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: "translateZ(0)",
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },
// }));

class Restaurants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      places: [],
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
    // const response = await fetch("/api/places");
    // const places = await response.json();
    // // console.log(places);

    // this.setState({
    //   places,
    // });

    await this.props.getPlaces();

    // console.log(places);
  }

  render() {
    const { places } = this.props;
    const { open } = this.state;
    const { handleClose, handleClick } = this;
    // console.log(places);
    // const favorites = places.filter((place) => place.isFavorite);
    // const center = favorites.length ? favorites[0] : places[0];

    return (
      <div className="container">
        <h1>Spidey's Grab Bag</h1>
        <h2>SAVE FOOD HELP THE PLANET</h2>
        <h2>
          <Link to="/mission">Mission</Link>
        </h2>
        <h2>
          <Link to="/participate">Participate</Link>
        </h2>
        <h2>
          <Link to="/backpack">BackPack</Link>
        </h2>

        {/* <OpenForm /> */}
        <Map places={places} />
      </div>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    getPlaces: () => dispatch(fetchPlaces()),
    updatePlace: (placeId, amount) => dispatch(updatePlace(placeId, amount)),
  };
};

export default connect((state) => state, mapDispatch)(Restaurants);

// export default Restaurants;
