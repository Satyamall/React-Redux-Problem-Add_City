
import { appConstants } from "./actionTypes";

export const getCitiesRequest = () => {
  return {
    type: appConstants.GET_CITY_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const getCitiesSuccess = (cities) => {
  return {
    type: appConstants.GET_CITY_SUCCESS,
    payload: {
      cities: cities
    }
  };
};

export const getCitiesFailure = () => {
  return {
    type: appConstants.GET_CITY_FAILURE,
    payload: {
      isError: true
    }
  };
};

export const getCities = () => (dispatch) => {
  // pre fetch
  const requestAction = getCitiesRequest();
  dispatch(requestAction);
  return fetch("http://localhost:3000/cities")
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = getCitiesSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = getCitiesFailure();
      dispatch(failureAction);
    });
};

export const addCitiesRequest = () => {
  return {
    type: appConstants.ADD_CITY_REQUEST,
    payload: {
      isLoading: true
    }
  };
};

export const addCitiesSuccess = (cities) => {
  return {
    type: appConstants.ADD_CITY_SUCCESS,
    payload: {
      cities: cities
    }
  };
};

export const addCitiesFailure = () => {
  return {
    type: appConstants.ADD_CITY_FAILURE,
    payload: {
      isError: true
    }
  };
};

// actionCreators
// type is mandatory, string

export const addCity = ({city,country,population}) => (dispatch) => {
  const requestAction = addCitiesRequest();
  dispatch(requestAction);
  return fetch("http://localhost:3000/cities", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      city: city,
      country: country,
      population: population
    })
  })
    .then((res) => res.json())
    .then((res) => {
      //success
      const successAction = addCitiesSuccess(res);
      dispatch(successAction);
    })
    .catch((res) => {
      // failure
      const failureAction = addCitiesFailure();
      dispatch(failureAction);
    });
};

export const removeCity = (id) => ({
  type: appConstants.REMOVE_CITY_ITEM,
  payload: {
    id: id
  }
});

export const toggleCity = (id) => ({
  type: appConstants.TOGGLE_CITY_STATUS,
  payload: {
    id: id
  }
});