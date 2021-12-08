// ---Dependencys
import { ReactElement } from 'react';
import LinkNext from 'next/link';

// ----------------------------------------COMPONENT----------------------------------------
export default function Links(props: {
  to: string;
  children: string | ReactElement | ReactElement[];
}): ReactElement {
  const { to, children } = props;
  return (
    <LinkNext href={to} passHref>
      <a href={to}>
        {children}
      </a>
    </LinkNext>
  );
}
