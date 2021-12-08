// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Types
import { StackKeys } from '@Reducers/language/customTypes';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Comps
import ToolsList from 'Comp/MainCV/DevToolsTable/ToolsList';
import Achivements from 'Comp/MainCV/DevToolsTable/Achivements';

// ------------------------------------------ PROPS-----------------------------------------
interface Props {
  devFather: StackKeys;
  onToolChange: (devFather: StackKeys, devToolIndex: number)=>void;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function FrontalCard(props: Props) : ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { languageReducer } = useSelector((reducers: ReduxState) => reducers);
  const { onToolChange, devFather } = props;
  const { achivements } = languageReducer.data.stack[devFather];
  // ------------------------Render-------------------------
  return (
    <Row justify="center" className="frontal-card">
      <Col xs={24} sm={24} md={14} lg={14} xl={14} xxl={14}>
        <ToolsList
          onToolChange={onToolChange}
          devFather={devFather}
        />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <Achivements achivements={achivements} />
      </Col>
    </Row>
  );
}
