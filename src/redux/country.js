// Set an initial state
const initialState = [];
const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR';
// Set the url for the API

// create an action
export const getCountriesAction = (data) => ({
  type: GET_COUNTRIES,
  payload: data,
});
// Fetch countries
export const getCountries = () => async (dispatch) => {
  await fetch('https://restcountries.eu/rest/v2/all').then((res) => dispatch(getCountriesAction(res.json())));
};

export const getCountriesError = (err) => ({
  type: GET_COUNTRIES_ERROR,
  payload: err,
});

// create a reducer
export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COUNTRIES':
      return action.payload;
    default:
      return state;
  }
};
