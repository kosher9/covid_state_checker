import { fetchCountries } from '../../redux/country';
import {
  getRegionError,
  getRegionLoading,
  getRegionsAction,
} from '../../redux/region';

describe('region', () => {
  it('should return an action with', () => {
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
    const action = getRegionsAction(data);
    expect(action).toEqual({
      type: 'GET_REGIONS',
      payload: data,
    });
  });

  it('should return an action with type GET_REGIONS_ERROR', () => {
    const action = getRegionError();
    expect(action).toEqual({
      type: 'GET_REGIONS_ERROR',
      payload: [],
    });
  });

  it('should return an action with type GET_REGIONS_LOADING', () => {
    const action = getRegionLoading();
    expect(action).toEqual({
      type: 'GET_REGIONS_LOADING',
      payload: [],
    });
  });
});

describe('fetch region', () => {
  it('should fetch regions', () => {
    const data = fetchCountries();
    expect(data).toBeInstanceOf(Object);
  });
});
