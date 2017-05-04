import { FETCH_MATCHES, ERROR_MSG, TOGGLE_LOADING } from '../actions/index.js';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_MATCHES:
      return { matches: action.payload.matches.data, loading: action.payload.loading };
    case ERROR_MSG:
      return action.payload;
    case TOGGLE_LOADING:
      return { matches: state.matches, loading: action.payload }
    default:
      return state;
  }
}
