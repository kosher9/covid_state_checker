import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRegions } from '../redux/region';

const Regions = ({ countryName }) => {
  const { data, loading } = useSelector((state) => state.region);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRegions(countryName));
  }, []);

  return (
    <>
      <div className="container">
        {loading === 'loading' && <>Loading</>}
        {loading === 'error' && <>Error</>}
        {loading === 'success'
          && data.map((region) => (
            <div key={region.id} className="grid grid-row gap-4">
              <div className="bg-pink-600 h-10 pl-2 pr-2 mt-2 flex justify-between">
                <h3 className="font-medium">{region.name}</h3>
                <p>{`${region.cases} cases`}</p>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

Regions.propTypes = {
  countryName: PropTypes.string.isRequired,
};

export default Regions;
