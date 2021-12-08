// ---Dependencys
import React from 'react';
import { CaretRightOutlined } from '@ant-design/icons';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---CommonComps
import Link from 'CComps/Link';

// ------------AUX COMPS
function AmazingBytton({ startButton }: {startButton: string}) {
  return (
    <Link to="/MainCVPage">
      <button className="glow-on-hover" type="button">
        {startButton}
        <CaretRightOutlined />
      </button>
    </Link>
  );
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Start(): React.ReactElement {
  // ---Redux States
  const { data, labels } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  return (
    <div className="start-container">
      <h1>{data.jobWanted}</h1>
      <AmazingBytton startButton={labels.startButton} />
    </div>
  );
}
