// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Comps
import TechCounter from 'Comp/MainCV/TechGraphs/TechCounter';
import EngLevel from 'Comp/MainCV/TechGraphs/EngLevel';
import Graphs from 'Comp/MainCV/TechGraphs/Graphs';

// ------------------------------------------ PROPS-----------------------------------------
interface Data {
  area: 'Back' | 'Front' | 'Arch';
  number: number;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function Introduction(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { data } = useSelector(
    (reducers: ReduxState) => reducers.languageReducer
  );
  const { stack } = data;
  const graphData: Array<Data> = [
    { area: 'Front', number: stack.front.devTools.length },
    { area: 'Arch', number: stack.arch.devTools.length },
    { area: 'Back', number: stack.back.devTools.length }
  ];
  const count = stack.front.devTools.length
    + stack.back.devTools.length
    + stack.arch.devTools.length;
  // -----------------------------------Render---------------------------------
  return (
    <Row id="stack" className="tech-graph">
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <TechCounter count={count} />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <Graphs gData={graphData} />
      </Col>
      <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <EngLevel />
      </Col>
    </Row>
  );
}
