// import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Search } from './pages/Search';
import axios from 'axios';
import { Button } from './button/Button';

// const baseURL = 'https://sheetdb.io/api/v1/32e5eu9scsk5a';
const baseURL = 'https://sheets.googleapis.com/v4/spreadsheets/1CuVq5aqflDRa-6VJ3Udm4IRYq5YYMy6lynHZnjK7Azw/values/marvel?key=AIzaSyBTllEI-tpxNFiFoLgyyi97ym5TwXjz9FM';
const data_number = 72;

export const Movies = () => {
  const [inputText, setInputText] = useState('　');
  const [useData, setUseData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      // ヘッダーを含めた全てのデータ
      const data = response.data.values;

      // ヘッダー以外の情報のみを表示
      const data_values = data.slice(1, data_number);

      // ヘッダーの情報行のみを表示(idからurlまで)
      const h_data = response.data.values[0];
      // console.log(h_data);

      // (難易度激たかい)data_valuesとh_dataの配列を1つの辞書型にまとめる
      const arrayToMap = (function () {
        function mapfn(data_values) {
          for (var i = 0, l = this.length, obj = Object.create(null); i < l; ++i) {
            if (data_values.hasOwnProperty(i)) {
              obj[this[i]] = data_values[i];
            }
          }
          return obj;
        }

        return function arrayToMap(s_data, h_data) {
          return s_data.map(mapfn, h_data);
        };
      })();

      const about = arrayToMap(data_values, h_data);
      // console.log(about);
      const array_value = JSON.stringify(about);
      const abc = JSON.parse(array_value);

      //Jsonデータの中身で数値となる部分を「文字列から数値」に変換
      for (var i = 0; i < abc.length; i++) {
        var obj = abc[i];
        for (var prop in obj) {
          if (obj.hasOwnProperty(prop) && obj[prop] !== null && !isNaN(obj[prop])) {
            obj[prop] = +obj[prop];
          }
        }
      }
      const result = JSON.stringify(abc, null, 2);
      const data_result = JSON.parse(result);


      // JsonデータをSearchに外部出力するためにuseStateで情報保持
      setUseData(data_result);
      setSearchData(data_result);
    });
  }, []);


  // ⬇︎ 検索機能
  const search = (value) => {
    if (value !== '') {
      const filteredList = useData.filter((member) =>
        Object.values(member).some((item) => typeof item === 'string' && item.toUpperCase().indexOf(value.trim().toUpperCase()) !== -1)
      );
      // setSearchData(filteredList);
      setSearchData(filteredList);

      return;
    }

    setSearchData(useData);
    return;
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
    search(e.target.value);
  };

  // ⬆︎ 検索機能

  return (
    <div className="wrapper">
      <div className="movies_main_title">
        <h3>Marvel映画作品一覧</h3>
      </div>

      <div>
        <Button useData={searchData} setUseData={setSearchData} inputText={inputText} setInputText={setInputText} />
        <div className="list_flex">
          <p className="inputText">{inputText}</p>
          <div className="input_flex">
            <p>キーワード検索： </p>
            <input className="input_search" type="text" placeholder="気にある映画を検索" value={inputValue} onChange={handleChange} />
          </div>
        </div>

        <ul className="list_box">
          {searchData.map((data, index) => (
            <Search data={data} key={index} searchData={searchData} />
          ))}
        </ul>
      </div>
    </div>
  );
};
