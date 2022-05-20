import React, { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';
import { getMapUrl } from './mapUtils';

const Country = ({ data, index }) => {
  const { id, name, confirmed } = data;
  const imageUrl = getMapUrl(id);

  const classBefore = 'opacity-0 translate-y-4';
  const classAfter = 'opacity-100';
  const [classCurrect, setClassCurrent] = useState(classBefore);

  useEffect(() => {
    setTimeout(() => {
      setClassCurrent(classAfter);
    }, index * 150);
    return () => {
      setClassCurrent(classBefore);
    };
  }, []);

  return (
    <Link
      to={`/region/${id}`}
      className={`${classCurrect} transition duration-300 flex flex-col justify-end aspect-square bg-pink-600 hover:shadow hover:-translate-y-1 text-right relative`}
    >
      <div
        className="absolute inset-2 bottom-8 z-0 opacity-10 rounded-md"
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      />
      <h2 className="md:text-base mr-2 font-medium">{name}</h2>
      <p className="text-sm md:text-base mr-2">{`Confirmed : ${confirmed}`}</p>
    </Link>
  );
};

Country.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    confirmed: PropTypes.string.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default Country;
