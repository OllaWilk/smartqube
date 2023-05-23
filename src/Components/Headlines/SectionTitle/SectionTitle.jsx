import React from 'react';
import './_SectionTitle.scss';

export const SectionTitle = ({ h2, h3 }) => {
  return (
    <div className='section-title'>
      <h3>{h3}</h3>
      <h2>{h2}</h2>
    </div>
  );
};
