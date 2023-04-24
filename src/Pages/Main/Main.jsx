import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const Main = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/home');
  });

  return <div></div>;
};
