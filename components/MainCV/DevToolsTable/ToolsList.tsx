// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Types
import { StackKeys } from '@Reducers/language/customTypes';

// ------------------------------------------ PROPS-----------------------------------------
interface Props {
  onToolChange: (devFather: StackKeys, devToolIndex: number)=>void;
  devFather: StackKeys;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function ToolsList(props: Props) : ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { onToolChange, devFather } = props;
  const grid = {
    xs: 8,
    sm: 8,
    md: 6,
    lg: 6,
    xl: 4,
    xxl: 3
  };
  // ---Redux States
  const { languageReducer } = useSelector((reducers: ReduxState) => reducers);
  const { devTools } = languageReducer.data.stack[devFather];
  // ------------------------------ Main Methods -----------------------------
  function onClick(i: number) {
    onToolChange(devFather, i);
  }
  return (
    <Row>
      {
        devTools.map((tool, i) => (
          <Col key={tool.title} {...grid}>
            <button type="button" onClick={() => onClick(i)}>
              <img src={tool.imgRoute} alt={tool.title} width="90%" />
              <h4>{tool.title}</h4>
            </button>
          </Col>
        ))
      }
    </Row>
  );
}
