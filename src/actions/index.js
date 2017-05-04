import axios from 'axios';

const ROOT_URL = `http://worldcup.sfg.io/matches/country?fifa_code=`;

export const FETCH_MATCHES = 'FETCH_MATCHES';
export const ERROR_MSG = 'ERROR_MSG';
export const TOGGLE_LOADING = 'TOGGLE_LOADING';

export const toggleLoading = () => {
  return (dispatch) => {
    dispatch({
      type: TOGGLE_LOADING,
      payload: true
    });
  }
}

export const fetchMatches = (countryCode) => {
  countryCode = countryCode.toUpperCase();
  const url = `${ROOT_URL}${countryCode}`;

  return (dispatch) => {
    axios.get(url)
      .then(response => {
        dispatch({
          type: FETCH_MATCHES,
          payload: { matches: response, loading: false }
        });
      })
      .catch((err) => {
        dispatch({
          type: ERROR_MSG,
          payload: 'Error obtaining country code ' + err
        })
      });
  };
}
