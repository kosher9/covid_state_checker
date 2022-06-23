import {
  fetchCountries, getCountriesAction, getCountriesError, getCountryLoading,
} from '../../redux/country';

describe('country', () => {
  it('should return an action with type GET_COUNTRIES', () => {
    const data = [
      {
        id: 1,
        name: 'Afghanistan',
        confirmed: 0,
        regions: [
          {
            id: 1,
            name: 'Kabul',
            confirmed: 0,
          },
        ],
      },
    ];
    const action = getCountriesAction(data);
    expect(action).toEqual({
      type: 'GET_COUNTRIES',
      payload: data,
    });
  });

  it('should return an action with type GET_COUNTRIES_ERROR', () => {
    const action = getCountriesError();
    expect(action).toEqual({
      type: 'GET_COUNTRIES_ERROR',
      payload: [],
    });
  });

  it('should return an action with type GET_COUNTRIES_LOADING', () => {
    const action = getCountryLoading();
    expect(action).toEqual({
      type: 'GET_COUNTRIES_LOADING',
      payload: [],
    });
  });
});

describe('fetch country', () => {
  it('should fetch countries', () => {
    const data = fetchCountries();
    expect(data).toBeInstanceOf(Object);
  });
});
