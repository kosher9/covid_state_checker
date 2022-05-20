import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCountries } from '../redux/country';
import Country from './Country';

const CountryList = ({ searchTerm = '' }) => {
  const { data, loading } = useSelector((state) => state.country);
  const [visibleCountries, setVisibleCountries] = useState(data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  useEffect(() => {
    setVisibleCountries(data);
  }, [data]);

  useEffect(() => {
    const cleanSearchTerm = searchTerm.toLowerCase().trim();
    setVisibleCountries(data?.filter((d) => {
      const countryName = d.name.toLowerCase();
      return countryName.includes(cleanSearchTerm);
    }) || data);
  }, [searchTerm]);

  return (
    <div>
      <div className="grid grid-cols-2 striped gap-2">
        {loading ? (
          visibleCountries?.map((country, index) => (
            <Country key={country.id} data={country} index={index} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

CountryList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default CountryList;
