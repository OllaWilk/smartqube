import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About, Contact, Home, Main, NotFound } from './Pages/index';
import { Footer, Navigation } from './Components';

export const App = () => {
  return (
    <>
      <Navigation />
      <div className='pages'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/home' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/smartqube' element={<Main />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
