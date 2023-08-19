import React from 'react';
import { Dna } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Dna
      visible={true}
      height={80}
      width={80}
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClassName="dna-wrapper"
    />
  );
};

export default Loader;
