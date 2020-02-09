import React from 'react';

const Bands = ({ bands }) => {
  const allBands = bands.map((band, index) => {
    return <li key={index}>{band.name}</li>;
  });

  return (
    <div>
      <ul>
      { allBands }
      </ul>
    </div>
  );
};

export default Bands;
