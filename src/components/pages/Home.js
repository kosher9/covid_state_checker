import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/country';
import Country from '../Country';
import { getMapUrl } from '../mapUtils';

const Home = () => {
  const { data, loading } = useSelector((state) => state.country);
  const worldImage = getMapUrl('world');
  const dispatch = useDispatch();

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
        <h3 className="text-black text-center text-bold text-base rounded bg-slate-100">Covid state</h3>
        <input className="rounded border-rose-600 m-auto block mt-5" type="text" placeholder="Search country" />
      </div>
      <div className="grid grid-cols-2 striped gap-2">
        {loading ? (
          data.map((country, index) => (
            <Country key={country.id} data={country} index={index} />
          ))
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </>
  );
};

export default Home;
