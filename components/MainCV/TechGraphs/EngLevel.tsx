// ---Dependencys
import React from 'react';
import { Progress } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Others
import { general } from 'Others/globalData';
// ------------------------------------------ COMPONENT-----------------------------------------
export default function EngLevel() : React.ReactElement {
  // ---Redux States
  const { labels } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  return (
    <div className="english-level">
      <Progress
        type="circle"
        status="active"
        strokeColor={{
          '0%': '#1ef0ed',
          '100%': '#27265c'
        }}
        percent={general.englishLevel}
      />
      <h2>{labels.englishLevel}</h2>
    </div>
  );
}
