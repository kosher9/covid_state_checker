import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCountries } from '../../redux/country';

const Home = () => {
  const { state, loadingState } = useSelector((state) => state.country);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
    if (loadingState === 'error') {
      console.log('error');
    }
  }, [state]);

  return <div>Home</div>;
};

export default Home;
