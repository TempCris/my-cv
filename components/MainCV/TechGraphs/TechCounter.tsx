// ---Dependencys
import React from 'react';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Others
import { ownerData } from 'Others/global-config';
// ------------------------------------------ COMPONENT-----------------------------------------
export default function TechCounter({ count }: {count: number}) : React.ReactElement {
  // ---Redux States
  const { labels } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  return (
    <div className="tech-counter">
      <img
        src="/images/tech-counter.png"
        height="210px"
        width="210px"
        alt={ownerData.name.withLast}
      />
      <h1>{count}</h1>
      <h2>{labels.devCounter}</h2>
    </div>
  );
}
