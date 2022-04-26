
import { appConstants } from "./actionTypes";

const initState = {
  cities: [],
  isLoading: true,
  isError: false
};

function reducer(state = initState, action) {
  switch (action.type) {
    case appConstants.GET_CITY_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case appConstants.GET_CITY_SUCCESS: {
      return {
        ...state,
        cities: action.payload.cities,
        isLoading: false
      };
    }
    case appConstants.GET_CITY_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    case appConstants.ADD_CITY_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case appConstants.ADD_CITY_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case appConstants.ADD_CITY_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }

    case appConstants.ADD_CITY: {
      return { ...state, cities: [...state.cities, action.payload] };
    }
    case appConstants.REMOVE_CITY_ITEM: {
      // TODO
      return {
        ...state,
        cities: state.cities.filter((item) => item.id !== action?.payload?.id)
      };
    }
    case appConstants.TOGGLE_CITY_STATUS: {
      // TODO
      return {
        ...state,
        cities: state.cities.map((item) =>
          item.id === action.payload.id
            ? { ...item, status: !item.status }
            : item
        )
      };
    }
    default:
      return state;
  }
}

export default reducer;