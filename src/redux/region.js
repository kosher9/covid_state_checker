import BASE_URL from '../url_config';

// Set an initial state

const GET_REGIONS = 'GET_REGIONS';
const GET_REGIONS_ERROR = 'GET_REGIONS_ERROR';
const GET_REGIONS_LOADING = 'GET_REGIONS_LOADING';

const initialState = {
  data: [],
  status: 'not fetched',
};

// Set the url for the API
export const getCountriesAction = (data) => ({
  type: GET_REGIONS,
  payload: data,
});

const getCountryLoading = () => ({
  type: GET_REGIONS_LOADING,
  payload: [],
});

const getCountriesError = () => ({
  type: GET_REGIONS_ERROR,
  payload: [],
});

const camelCase = (str) => {
  if (str === 'us') return 'US';
  const strArr = str.toLowerCase().split(' ');
  const strArrCamelCase = strArr.map((sa) => sa[0].toUpperCase() + sa.slice(1));
  return strArrCamelCase.join(' ');
};

// Fetch countries
export const fetchRegions = (countryName) => async (dispatch) => {
  await fetch(`${BASE_URL}/2020-03-10/country/${countryName}`)
    .then((res) => res.json())
    .then((data) => {
      getCountryLoading();
      const regions = [];
      const regionsData = data.dates['2020-03-10'].countries[camelCase(countryName)].regions;
      regionsData.forEach((region) => {
        regions.push({
          id: region.id,
          name: region.name,
          cases: region.today_confirmed,
        });
      });
      dispatch(getCountriesAction(regions));
    })
    .catch((err) => {
      dispatch(getCountriesError(err));
    });
};

// create a reducer
export const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REGIONS:
      return { data: action.payload, loading: 'success' };
    case GET_REGIONS_LOADING:
      return { ...state, loading: 'loading' };
    case GET_REGIONS_ERROR:
      return { ...state, loading: 'error' };
    default:
      return state;
  }
};
