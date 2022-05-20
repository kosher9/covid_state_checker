// Set an initial state
const initialState = [];
const GET_COUNTRIES = 'GET_COUNTRIES';
const GET_COUNTRIES_ERROR = 'GET_COUNTRIES_ERROR';
const GET_COUNTRIES_LOADING = 'GET_COUNTRIES_LOADING';
const FILTER_COUNTRY = 'FILTER_COUNTRY';
// Set the url for the API

// create an action
// const todayDate = new Date().toISOString().split('T')[0];

export const getCountriesAction = (data) => ({
  type: GET_COUNTRIES,
  payload: data,
});

export const getCountriesError = () => ({
  type: GET_COUNTRIES_ERROR,
  payload: [],
});

const getCountryLoading = () => ({
  type: GET_COUNTRIES_LOADING,
  payload: [],
});

/* const filterCountry = (filter) => ({
  type: FILTER_COUNTRY,
  payload: filter,
}); */

export const fetchCountries = () => async (dispatch) => {
  await fetch('https://api.covid19tracking.narrativa.com/api/2020-03-10')
    .then((res) => res.json())
    .then((data) => {
      getCountryLoading();
      let countries = [];
      const countriesData = data.dates['2020-03-10'].countries;

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
      return { data: action.payload, loading: 'success' };
    case GET_COUNTRIES_ERROR:
      return { ...state, error: 'error' };
    case GET_COUNTRIES_LOADING:
      return { ...state, loading: 'loading' };
    case FILTER_COUNTRY:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};
