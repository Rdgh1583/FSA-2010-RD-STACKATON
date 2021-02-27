import axios from "axios";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

//Action Types //
const SET_PLACES = "SET_PLACES";
const SET_PLACE = "SET_PLACE";
const UPDATE_PLACE = "UPDATE_PLACE";
const GRAB_IT = "GRAB_IT";
const CREATE_PLACE = "CREATE_PLACE";

// //ACTION CREATORS //
const setPlaces = (places) => ({ type: SET_PLACES, places });
const _setPlace = (place) => ({ type: SET_PLACE, place });
const _updatePlace = (place) => ({ type: UPDATE_PLACE, place });
const _addToBag = (place) => ({ type: GRAB_IT, place });
const _createPlace = (place) => ({ type: CREATE_PLACE, place });

//THUNK CREATOR
export const fetchPlaces = () => {
  return async (dispatch) => {
    const places = (await axios.get("/api/places")).data;
    dispatch(setPlaces(places));
  };
};

export const setPlace = (id) => {
  return async (dispatch) => {
    const place = (await axios.get(`/api/places/${id}`)).data;
    console.log(place);
    dispatch(_setPlace(place));
  };
};

const placesReducer = (state = [], action) => {
  if (action.type === SET_PLACES) {
    return action.places;
  }
  if (action.type === SET_PLACE) {
    return action.place;
  }
  if (action.type === UPDATE_PLACE) {
    return [...state, action.places];
  }
  if (action.type === GRAB_IT) {
    return [...state, action.place];
  }
  if (action.type === CREATE_PLACE) {
    return [...state, action.place];
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

export const addToBag = (placeId, order) => {
  return async (dispatch) => {
    const place = (await axios.put(`/api/places/${placeId}`, { order })).data;
    dispatch(_addToBag(place));
    console.log(place);
  };
};
export const createPlace = (
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
) => {
  return async (dispatch) => {
    const place = (
      await axios.post(`/api/places`, {
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
      })
    ).data;
    dispatch(_createPlace(place));
    history.push("/");
  };
};

const reducer = combineReducers({
  places: placesReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
