/* eslint-disable react/no-array-index-key */
// ---Dependencys
import { ReactElement } from 'react';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function Achivements({ achivements }: {achivements: Array<string>}) : ReactElement {
  // ---Redux States
  const { labels } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  return (
    <div className="achievements">
      <h3>{labels.achievements}</h3>
      <ul>
        {achivements.map((element, i) => <li key={`s${i}`}>{element}</li>)}
      </ul>
    </div>
  );
}
