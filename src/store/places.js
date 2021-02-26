import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Action Types //
const SET_PLACES = "SET_PLACES";
const UPDATE_PLACE = "UPDATE_PLACE";

// //ACTION CREATORS //
const setPlaces = (places) => ({ type: SET_PLACES, places });
const _updatePlace = (place) => ({ type: UPDATE_PLACE, place });

//THUNK CREATOR
export const fetchPlaces = () => {
  return async (dispatch) => {
    const places = (await axios.get("/api/places")).data;
    dispatch(setPlaces(places));
  };
};

const placesReducer = (state = [], action) => {
  if (action.type === SET_PLACES) {
    return action.places;
  }
  if (action.type === UPDATE_PLACE) {
    return [...state, action.places];
  }
  return state;
};

export const updatePlace = (placeId, stock, amount) => {
  return async (dispatch) => {
    const place = (await axios.put(`api/places/${placeId}`, { stock, amount }))
      .data;
    dispatch(_updatePlace(place));
  };
};

const reducer = combineReducers({
  places: placesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
