// ---Dependencys
import { ReactElement } from 'react';
import Link from 'CComps/Link';
import { Col, ColProps } from 'antd';

// ------------------------------------TYPES---------------------------------------
interface Props {
  children?: string | ReactElement | ReactElement[];
  path: string;
  currentPath: string;
  grid: ColProps
}
// -----------------------------------COMPONENT------------------------------------
export default function NavButton(props: Props): ReactElement {
  const {
    children, path, currentPath, grid
  } = props;

  return (
    <Col className="nav-col" {...grid}>
      <Link to={path}>
        <div
          className={currentPath === path ? 'nav-btn nav-border' : 'nav-btn'}
        >
          {children}
        </div>
      </Link>
      <div className="slider" />
    </Col>
  );
}
