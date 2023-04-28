import React from 'react';

import './_Subscrybe.scss';

export const Subscribe = () => {
  return (
    <div className='subscrybe'>
      <h3 className='subscrybe__title'>SIGN-UP FOR OUR MONTHLY NEWSLETTER!</h3>
      <form action='submit' className='subscrybe__form'>
        <input type='text' placeholder='name' />
        <input type='text' placeholder='email address' />
        <button> Subscribe !</button>
      </form>
    </div>
  );
};
