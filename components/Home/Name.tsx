// ---Dependencys
import React from 'react';
// ---Others
import { ownerData } from 'Others/global-config';
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Name(): React.ReactElement {
  return (
    <div className="name-container">
      <img
        src="/images/name-frame.png" // Route of the image file
        height="300px"
        width="300px"
        alt={ownerData.name.withLast}
      />
      <span>{ownerData.name.withLast}</span>
    </div>
  );
}
