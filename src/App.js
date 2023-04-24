import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Contact, Home, Main, NotFound } from './Pages/index';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/home' element={<Home />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};
