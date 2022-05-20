import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const RigionView = () => {
  useEffect(() => {
    console.log('RigionView');
  }, []);

  return (
    <Link
      to="/home"
    >
      Back
    </Link>
  );
};

export default RigionView;
