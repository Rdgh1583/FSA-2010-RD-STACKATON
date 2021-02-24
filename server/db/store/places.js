import axios from "axios";
import { createStore } from "redux";

const store = createStore(placesReducer);

//Action Types //
const SET_PLACES = "SET_PLACES";

//ACTION CREATORS //
const setPlaces = (places) => ({ type: SET_PLACES, places });

//THUNK CREATOR
export const fetchUsers = () => {
  return async (dispatch) => {
    const places = (await axios.get("/api/places")).data;
    dispatch(setPlaces(places));
  };
};

export const placesReducer = (state = [], action) => {
  if (action.type === SET_PLACES) {
    return action.places;
  }
  return state;
};
