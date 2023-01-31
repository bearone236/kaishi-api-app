import React from 'react';

export const Button = ({ useData, setUseData, inputText, setInputText }) => {
  //世界興行収入の降順
  const IncomeSortClick = () => {
    const incomeSort = useData.sort(function (a, b) {
      return a.dollar_income_world > b.dollar_income_world ? -1 : 1;
    });

    // console.log(incomeSort);
    setUseData([...incomeSort]);
    setInputText('◆ 世界興行収入ランキング ◆');
  };

  //公開日の降順
  const ReleaseSortClick = () => {
    const releaseSort = useData.sort(function (a, b) {
      return a.release_date_us > b.release_date_us ? -1 : 1;
    });

    // console.log(releaseSort);
    setUseData([...releaseSort]);
    setInputText('◆ 最新の公開日 ◆');
  };

  //上映時間の降順
  const ScreenSortClick = () => {
    const screenSort = useData.sort(function (a, b) {
      return a.screeningtime > b.screeningtime ? -1 : 1;
    });

    // console.log(screenSort);
    setUseData([...screenSort]);
    setInputText('◆ 上映時間の長い順 ◆');
  };

  //時間列の昇順
  const SeriesSortClick = () => {
    const seriesSort = useData.sort(function (a, b) {
      return a.time_series < b.time_series ? -1 : 1;
    });

    // console.log(seriesSort);
    setUseData([...seriesSort]);
    setInputText('◆ おすすめの見る順 ◆');
  };

  return (
    <div className="button_details">
      <button className="item" onClick={IncomeSortClick} value="dollar_income_world">
        世界興行収入
      </button>
      <button className="item" onClick={ReleaseSortClick} value="release_date_us">
        公開日
      </button>
      <button className="item" onClick={ScreenSortClick} value="screeningtime">
        上映時間
      </button>
      <button className="item" onClick={SeriesSortClick} value="time_series">
        時間列
      </button>
    </div>
  );
};
