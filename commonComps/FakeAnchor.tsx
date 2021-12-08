// ---Dependencys
import { ReactElement } from 'react';

// ----------------------------------------COMPONENT----------------------------------------
export default function FakeAnchor(props: {
  fakePath: string;
  children: string | ReactElement | ReactElement[];
}): ReactElement {
  const { fakePath, children } = props;
  return (
    <a href={fakePath} onClick={(e) => e.preventDefault()}>
      {children}
    </a>
  );
}
