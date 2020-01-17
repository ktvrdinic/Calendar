import {
  GET_DATES,
  ADD_DATE,
  DELETE_DATE,
  UPDATE_DATE,
  DATES_LOADING
} from "../actions/types";

// initial event data
/*{ id: nextId(), title: 'Instrukcije Hrvatski', start: new Date(), end: new Date() },
        { id: nextId(), title: 'Nogomet', start: new Date('Fri Nov 15 2019 18:00:00 GMT+0100 (Central European Standard Time)') },
        { id: nextId(), title: 'Instrukcije Matematika', start: new Date('Fri Nov 17 2019 14:00:00 GMT+0100 (Central European Standard Time)') }
    */
const initialState = {
  dates: [],
  loading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATES:
      return {
        ...state,
        dates: action.payload,
        loading: false
      };
    case DELETE_DATE:
      return {
        ...state,
        dates: state.dates.filter(date => date._id !== action.payload)
      };
    case ADD_DATE:
      return {
        ...state,
        dates: [action.payload, ...state.dates]
      };
    case UPDATE_DATE:
      return {
        ...state,
        dates: state.dates.map(date =>
          date._id === action.payload._id ? action.payload : date
        )
      };
    case DATES_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}
