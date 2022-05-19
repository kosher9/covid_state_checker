// Set an initial state
const initialState = [];
const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR';
const GET_COUNTRIES_LOADING = 'GET_COUNTRIES_LOADING';
// Set the url for the API

// create an action
const todayDate = new Date().toISOString().split('T')[0];

export const getCountriesAction = (data) => ({
  type: GET_COUNTRIES,
  payload: data,
});

export const getCountriesError = (err) => ({
  type: GET_COUNTRIES_ERROR,
  payload: err,
});

const getCountryLoading = () => ({
  type: GET_COUNTRIES_LOADING,
  payload: [],
});

export const fetchCountries = () => async (dispatch) => {
  await fetch(`https://api.covid19tracking.narrativa.com/api/${todayDate}`)
    .then((res) => res.json())
    .then((data) => {
      getCountryLoading();
      let countries = [];
      const countriesData = data.dates[todayDate].countries;

      Object.keys(countriesData).forEach((cntry) => {
        countries.push({
          id: countriesData[cntry].id,
          name: countriesData[cntry].name,
          confirmed: countriesData[cntry].today_confirmed,
        });
      });

      countries = countries.filter((cntry) => cntry.confirmed > 0);
      countries.sort((a, b) => a.confirmed > b.confirmed);
      dispatch(getCountriesAction(countries));
    })
    .catch((err) => {
      dispatch(getCountriesError(err));
    });
};

// create a reducer
export const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return { ...action.payload, loadingState: 'success' };
    case GET_COUNTRIES_ERROR:
      return { state, loadingState: 'error' };
    case GET_COUNTRIES_LOADING:
      return { state, loadingState: 'loading' };
    default:
      return { state, loadingState: 'default' };
  }
};
