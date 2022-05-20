import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/country';
import CountryList from '../CountryList';
import { getMapUrl } from '../mapUtils';

const Home = () => {
  const worldImage = getMapUrl('world');
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const upDateSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <>
      <div
        className="container mx-auto h-40 opacity-10"
        style={{
          backgroundImage: `url(${worldImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <div className="container mx-auto mt-4 absolute top-10">
        <h3 className="text-black text-center text-bold text-base rounded bg-slate-100">
          Covid state
        </h3>
        <input
          className="rounded border-rose-600 m-auto block mt-5"
          type="text"
          placeholder="Search country "
          onChange={upDateSearch}
        />
      </div>
      <h3>Stats by country</h3>
      <CountryList searchTerm={searchTerm} />
    </>
  );
};

export default Home;
