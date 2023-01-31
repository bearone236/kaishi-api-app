import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Details = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="wrapper">
      <button onClick={() => navigate('/')}>戻る</button>
    </div>
  );
};
