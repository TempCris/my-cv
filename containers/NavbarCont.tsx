// ---Dependencys
import { ReactElement } from 'react';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Components
import NavBar from 'Comp/NavBar';
import GlobalComponents from 'Comp/NavBar/GlobalComponents';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function NavbarCont(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { isMovil, currentPath } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // -----------------------------------Render---------------------------------
  return (
    <>
      <NavBar currentPath={currentPath} isMovil={isMovil} />
      <GlobalComponents />
    </>
  );
}
