// Set an initial state
const initialState = [];
const GET_REGIONS = 'GET_REGIONS';

// Set the url for the API
export const getCountriesAction = (data) => ({
  type: GET_REGIONS,
  payload: data,
});
// Fetch countries
export const fetchRegions = () => async (dispatch) => {
  await fetch('https://restcountries.eu/rest/v2/all').then((res) => dispatch(getCountriesAction(res.json())));
};

// create a reducer
export const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return action.payload;
    default:
      return state;
  }
};
