// ---Dependencys
import { ReactElement } from 'react';
import { DownOutlined } from '@ant-design/icons';
import Link from 'CComps/Link';
import {
  Col, ColProps, Menu, Dropdown
} from 'antd';
// ---Types
import { ObjLabelValue } from '@Declarations';

// -------------------------------------AUX PROPS--------------------------------
export type DropDownPath = ObjLabelValue & {
  handleClick?: () => void
}
interface OtherProps {
  paths: Array<DropDownPath>;
}
// -------------------------------------AUX COMPONENTS--------------------------------
function DropdownMenu({ paths }: OtherProps) {
  return (
    <Menu>
      {paths.map((element) => {
        if (element.handleClick !== undefined) {
          return (
            <Menu.Item onClick={element.handleClick} key={element.label}>
              {element.label}
            </Menu.Item>
          );
        }
        return (
          <Menu.Item key={element.label}>
            <Link to={`${element.value}`}>
              {element.label}
            </Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}
// --------------------------------PROPS TYPES-------------------------------------
interface Props {
  currentPath: string;
  grid: ColProps
  label: string;
  paths: Array<DropDownPath>;
}
// -----------------------------------COMPONENT------------------------------------
export default function NavDropdown(props: Props): ReactElement {
  const {
    grid, currentPath, label, paths
  } = props;
  const {
    xs, sm, md, lg, xl, xxl
  } = grid;

  function isCurrentPath(checkPath: string, allPaths: Array<DropDownPath>): boolean {
    for (let i = 0; i < allPaths.length; i++) {
      const path = allPaths[i];
      if (path.value === checkPath) {
        return true;
      }
    }
    return false;
  }

  return (
    <Col className="nav-col" xs={xs} sm={sm} md={md} lg={lg} xl={xl} xxl={xxl}>
      <div
        className={isCurrentPath(currentPath, paths) ? 'nav-btn nav-border' : 'nav-btn'}
      >
        <Dropdown overlay={<DropdownMenu paths={paths} />}>
          <a href="/" onClick={(e) => e.preventDefault()}>
            {label}
            <DownOutlined />
          </a>
        </Dropdown>
      </div>
      <div className="slider" />
    </Col>
  );
}
