import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Movie = ({ data, searchData }) => {
  const navigate = useNavigate();

  return (
    <div className="movie" key={data.id}>
      <button className="click_button" onClick={() => navigate(`/details/`)}>
        {data.id}
      </button>
    </div>
  );
};
