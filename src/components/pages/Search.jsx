import React from 'react';
import { Movie } from './Movie';

// const searchURL = 'https://sheets.googleapis.com/v4/spreadsheets/1CuVq5aqflDRa-6VJ3Udm4IRYq5YYMy6lynHZnjK7Azw/values/marvel?key=AIzaSyBTllEI-tpxNFiFoLgyyi97ym5TwXjz9FM';

export const Search = ({ data, searchData }) => {
  // console.log(data.id);

  return (
    <div className="search">
      <li key={data.id} className="list">
        <div className="list_details">
          {/* <button className="click_button" key={data.id} onClick={handleChange}>
            {index + 1}
          </button> */}

          <Movie data={data} searchData={searchData} />

          <h4 className="movies_title">
            {data.title}　({data.release_date_us})
          </h4>
          <div className="movie_details">
            <p className="list_income">
              <span>世界興行収入： ${data.dollar_income_world.toLocaleString()}</span>
            </p>
            <p className="list_screentime">
              <span>上映時間　　： {data.screeningtime}分</span>
            </p>
            <p className="list_time">
              <span>時間列　　　： {data.time_series} 番目</span>
            </p>
          </div>
        </div>
      </li>
    </div>
  );
};
