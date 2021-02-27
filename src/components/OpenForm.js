// // import React, { useState } from "react";
// // import { connect } from "react-redux";
// // import { createPlace } from "../store/places";
// // import Button from "@material-ui/core/Button";
// // import TextField from "@material-ui/core/TextField";
// // import Dialog from "@material-ui/core/Dialog";
// // import DialogActions from "@material-ui/core/DialogActions";
// // import DialogContent from "@material-ui/core/DialogContent";
// // import DialogContentText from "@material-ui/core/DialogContentText";
// // import DialogTitle from "@material-ui/core/DialogTitle";

// // function OpenForm() {
// //   const [open, setOpen] = useState(false);

// //   const handleClickOpen = () => {
// //     setOpen(true);
// //   };

// //   const handleClose = () => {
// //     setOpen(false);
// //   };

// //   let [
// //     change,
// //     name,
// //     latitude,
// //     longitude,
// //     isFavorite,
// //     stock,
// //     time,
// //     price,
// //     amount,
// //     order,
// //     phone,
// //     email,
// //     // setPlace,
// //   ] = useState({
// //     name: "",
// //     latitude: "",
// //     longitude: "",
// //     isFavorite: "",
// //     stock: "",
// //     time: "",
// //     price: "",
// //     amount: "",
// //     order: "",
// //     phone: "",
// //     email: "",
// //   });

// //   let handleChange = (e) => {
// //     let name = e.target.name;
// //     let value = e.target.value;
// //     change[name] = value;
// //     // setPlace(change);
// //   };

// //   let save = async (e) => {
// //     e.preventDefault();
// //     try {
// //       await useState.create(
// //         this.state.name,
// //         this.state.latitude,
// //         this.state.longitude,
// //         this.state.isFavorite,
// //         this.state.stock,
// //         this.state.time,
// //         this.state.price,
// //         this.state.amount,
// //         this.state.order,
// //         this.state.phone,
// //         this.state.email
// //       );
// //     } catch (er) {
// //       console.log("this is er", er);
// //       // this.setState({ error: er });
// //     }
// //   };

// //   return (
// //     <div>
// //       <Button variant="outlined" color="primary" onClick={handleClickOpen}>
// //         Sign Up
// //       </Button>
// //       <Dialog
// //         open={open}
// //         onClose={handleClose}
// //         aria-labelledby="form-dialog-title"
// //       >
// //         <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
// //         <DialogContent>
// //           <DialogContentText>
// //             To subscribe to this website, please enter your email address here.
// //             We will send updates occasionally.
// //           </DialogContentText>
// //           <TextField
// //             id="standard-basic"
// //             name="name"
// //             label="Name"
// //             value={name}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           {/* <TextField
// //             id="standard-basic"
// //             // name="location"
// //             label="Location"
// //             value={location}
// //             variant="outlined"
// //             onChange={onChange}
// //           ></TextField> */}
// //           <TextField
// //             id="standard-basic"
// //             name="latitude"
// //             label="Latitude"
// //             value={latitude}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="longitude"
// //             label="Longitude"
// //             value={longitude}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="isfavorite"
// //             label="Is favorite"
// //             value={isFavorite}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="stock"
// //             label="Stock"
// //             value={stock}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="time"
// //             label="Time"
// //             value={time}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="price"
// //             label="price"
// //             value={price}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="amount"
// //             label="Amount"
// //             value={amount}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="order"
// //             label="Order"
// //             value={order}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="phone"
// //             label="Phone"
// //             value={phone}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //           <TextField
// //             id="standard-basic"
// //             name="email"
// //             label="Email"
// //             value={email}
// //             variant="outlined"
// //             onChange={handleChange}
// //           ></TextField>
// //           <br />
// //         </DialogContent>
// //         <DialogActions>
// //           <Button onClick={handleClose} color="primary">
// //             Cancel
// //           </Button>
// //           <Button onClick={save} color="primary">
// //             Subscribe
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //     </div>
// //   );
// // }

// // const mapToDispatch = (dispatch) => {
// //   return {
// //     create: (
// //       name,
// //       latitude,
// //       longitude,
// //       isFavorite,
// //       stock,
// //       time,
// //       price,
// //       amount,
// //       order,
// //       phone,
// //       email
// //     ) =>
// //       dispatch(
// //         createPlace(
// //           name,
// //           latitude,
// //           longitude,
// //           isFavorite,
// //           stock,
// //           time,
// //           price,
// //           amount,
// //           order,
// //           phone,
// //           email
// //         )
// //       ),
// //   };
// // };
// // export default connect((state) => state, mapToDispatch)(OpenForm);

// import React from "react";
// import { connect } from "react-redux";
// import TextField from "@material-ui/core/TextField";
// import InputLabel from "@material-ui/core/InputLabel";
// import Button from "@material-ui/core/Button";
// import { WebMercatorViewport } from "react-map-gl";
// import { createPlace } from "../store/places";

// class OpenForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: "",
//       latitude: "",
//       longitude: "",
//       isFavorite: "",
//       stock: "",
//       time: "",
//       price: "",
//       amount: "",
//       order: "",
//       phone: "",
//       email: "",
//     };
//     this.onChange = this.onChange.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);
//     this.handleClickOpen = this.handleClickOpen(this);
//     this.handleClose = this.handleClose(this);
//   }

//   handleClickOpen() {
//     this.setState(true);
//   }

//   handleClose() {
//     this.setState(false);
//   }

//   onChange(ev) {
//     const change = {};
//     change[ev.target.name] = ev.target.value;
//     this.setState(change);
//   }

//   async onSubmit(ev) {
//     ev.preventDefault();
//     //this stops state from refreshing?
//     try {
//       await this.props.create(
//         this.state.name,
//         this.state.latitude,
//         this.state.longitude,
//         this.state.isFavorite,
//         this.state.stock,
//         this.state.time,
//         this.state.price,
//         this.state.amount,
//         this.state.order,
//         this.state.phone,
//         this.state.email
//       );
//     } catch (er) {
//       console.log("this is er", er);
//       this.setState({ error: er });
//     }
//   }

//   render() {
//     const {
//       name,
//       latitude,
//       longitude,
//       isFavorite,
//       stock,
//       time,
//       price,
//       amount,
//       order,
//       phone,
//       email,
//     } = this.state;
//     const { onSubmit, onChange, handleClose, handleClickOpen } = this;
//     return (
//       // <div className="signup">
//       //   <h1>SELL YOUR SURPLUS FOOD, EASILY</h1>
//       //   <form id="signup-form" onSubmit={onSubmit}>
//       //     <TextField
//       //       id="standard-basic"
//       //       name="name"
//       //       label="Name"
//       //       value={name}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     {/* <TextField
//       //       id="standard-basic"
//       //       name="location"
//       //       label="Location"
//       //       value={location}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField> */}
//       //     <TextField
//       //       id="standard-basic"
//       //       name="latitude"
//       //       label="Latitude"
//       //       value={latitude}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="longitude"
//       //       label="Longitude"
//       //       value={longitude}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="isfavorite"
//       //       label="Is favorite"
//       //       value={isFavorite}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="stock"
//       //       label="Stock"
//       //       value={stock}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="time"
//       //       label="Time"
//       //       value={time}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="price"
//       //       label="price"
//       //       value={price}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="amount"
//       //       label="Amount"
//       //       value={amount}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="order"
//       //       label="Order"
//       //       value={order}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="phone"
//       //       label="Phone"
//       //       value={phone}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <TextField
//       //       id="standard-basic"
//       //       name="email"
//       //       label="Email"
//       //       value={email}
//       //       variant="outlined"
//       //       onChange={onChange}
//       //     ></TextField>
//       //     <br />
//       //     <Button type="submit" id="signup-button">
//       //       Save Changes
//       //     </Button>
//       //   </form>
//       // </div>

//       <div>
//         <Button variant="outlined" color="primary" onClick={handleClickOpen}>
//           Sign Up
//         </Button>
//         <Dialog
//           open={open}
//           onClose={handleClose}
//           aria-labelledby="form-dialog-title"
//         >
//           <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
//           <DialogContent>
//             <DialogContentText>
//               To subscribe to this website, please enter your email address
//               here. We will send updates occasionally.
//             </DialogContentText>
//             <TextField
//               id="standard-basic"
//               name="name"
//               label="Name"
//               value={name}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             {/* <TextField
//             id="standard-basic"
//             // name="location"
//             label="Location"
//             value={location}
//             variant="outlined"
//             onChange={onChange}
//           ></TextField> */}
//             <TextField
//               id="standard-basic"
//               name="latitude"
//               label="Latitude"
//               value={latitude}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="longitude"
//               label="Longitude"
//               value={longitude}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="isfavorite"
//               label="Is favorite"
//               value={isFavorite}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="stock"
//               label="Stock"
//               value={stock}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="time"
//               label="Time"
//               value={time}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="price"
//               label="price"
//               value={price}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="amount"
//               label="Amount"
//               value={amount}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="order"
//               label="Order"
//               value={order}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="phone"
//               label="Phone"
//               value={phone}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//             <TextField
//               id="standard-basic"
//               name="email"
//               label="Email"
//               value={email}
//               variant="outlined"
//               onChange={handleChange}
//             ></TextField>
//             <br />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="primary">
//               Cancel
//             </Button>
//             <Button onClick={save} color="primary">
//               Subscribe
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </div>
//     );
//   }
// }

// const mapToDispatch = (dispatch) => {
//   return {
//     create: (
//       name,
//       latitude,
//       longitude,
//       isFavorite,
//       stock,
//       time,
//       price,
//       amount,
//       order,
//       phone,
//       email
//     ) =>
//       dispatch(
//         createPlace(
//           name,
//           latitude,
//           longitude,
//           isFavorite,
//           stock,
//           time,
//           price,
//           amount,
//           order,
//           phone,
//           email
//         )
//       ),
//   };
// };
// export default connect((state) => state, mapToDispatch)(OpenForm);
