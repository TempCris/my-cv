// ---Dependencys
import React, { useState, ReactElement } from 'react';
import {
  HomeOutlined, MenuFoldOutlined, MenuOutlined, UserOutlined
} from '@ant-design/icons';
import Link from 'CComps/Link';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector, useDispatch } from 'react-redux';
import { ReduxState } from 'Reducers';
import {
  toSpanish,
  toEnglish
} from 'Actions/language';
// ---Components
import NavButton from 'Comp/NavBar/NavbarItems/NavButton';
import NavDropdown, { DropDownPath } from 'Comp/NavBar/NavbarItems/NavDropdown';
// ---Others
import { general } from 'Others/globalData';

// -------------------------------------AUX COMPONENTS--------------------------------
function JustButtons(props: { currentPath: string }) {
  const { currentPath } = props;
  const navGrid = {
    xs: 24,
    sm: 24,
    md: 4,
    lg: 4,
    xl: 4,
    xxl: 4
  };
  const logInGrid = {
    xs: 24,
    sm: 24,
    md: { offset: 4, span: 4 },
    lg: { offset: 4, span: 4 },
    xl: { offset: 4, span: 4 },
    xxl: { offset: 4, span: 4 }
  };
  // ---Redux States
  const { labels } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  // ---Redux Actions
  const dispatch = useDispatch();
  // ---DropDown Menus
  const langMenu: Array<DropDownPath> = [
    {
      label: 'English',
      value: '/',
      handleClick: () => dispatch(toEnglish())
    },
    {
      label: 'Español',
      value: '/',
      handleClick: () => dispatch(toSpanish())
    }
  ];
  return (
    <Row>
      <NavButton path={`/MainCVPage#${general.sectionIds.stack}`} currentPath={currentPath} grid={navGrid}>
        {labels.menu.stack}
      </NavButton>
      <NavButton path={`/MainCVPage#${general.sectionIds.exp}`} currentPath={currentPath} grid={navGrid}>
        {labels.menu.experience}
      </NavButton>
      <NavButton path={`/MainCVPage#${general.sectionIds.knowledge}`} currentPath={currentPath} grid={navGrid}>
        {labels.menu.knowledge}
      </NavButton>
      <NavButton path={`/MainCVPage#${general.sectionIds.contact}`} currentPath={currentPath} grid={logInGrid}>
        <>
          <UserOutlined />
          {labels.menu.contact}
        </>
      </NavButton>
      <NavDropdown
        paths={langMenu}
        label={labels.menu.lang}
        currentPath={currentPath}
        grid={navGrid}
      />
    </Row>
  );
}
interface OtherProps {
  currentPath: string;
  menuVisible: boolean;
  setMenuVisible: (arg: boolean) => void;
}
function MovilMenu(props: OtherProps) {
  const { menuVisible, setMenuVisible, currentPath } = props;
  return (
    <Row>
      <Col span={24}>
        <button
          className="nav-btn"
          onClick={() => setMenuVisible(!menuVisible)}
          type="button"
        >
          {menuVisible ? <MenuFoldOutlined /> : <MenuOutlined />}
        </button>
      </Col>
      <Col span={24}>
        {menuVisible ? <JustButtons currentPath={currentPath} /> : null}
      </Col>
    </Row>
  );
}
// ------------------------------------------ TYPES-----------------------------------------
interface Props {
  isMovil: boolean;
  currentPath: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Navbar(props: Props): ReactElement {
  const { isMovil, currentPath } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <Row id="nav" className="nav-div">
      <Col xs={24} sm={24} md={4} lg={4} xl={6} xxl={6}>
        <Link to="/">
          <div className="to-home">
            <HomeOutlined />
          </div>
        </Link>
      </Col>
      <Col xs={24} sm={24} md={20} lg={20} xl={18} xxl={18}>
        {isMovil ? (
          <MovilMenu
            currentPath={currentPath}
            menuVisible={menuVisible}
            setMenuVisible={setMenuVisible}
          />
        ) : (
          <JustButtons currentPath={currentPath} />
        )}
      </Col>
    </Row>
  );
}
