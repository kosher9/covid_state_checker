import React from 'react';
import { useParams } from 'react-router-dom';
import { getMapUrl } from '../mapUtils';
import Regions from '../Regions';

const RegionPage = () => {
  let { countryName } = useParams();
  const imageUrl = getMapUrl(countryName);
  countryName = countryName.replace(/_/g, ' ');

  return (
    <>
      <div
        className="container mx-auto h-40 opacity-10"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <Regions countryName={countryName} />
    </>
  );
};

export default RegionPage;
