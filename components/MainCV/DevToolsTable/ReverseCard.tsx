/* eslint-disable react/no-array-index-key */
// ---Dependencys
import { ReactElement, Ref, MutableRefObject } from 'react';
import {
  Row, Col, Progress, Rate
} from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Types
import { StackKeys } from '@Reducers/language/customTypes';
// ---Other
import { ownerData } from 'Others/global-config';

// ------------------------------------------ PROPS-----------------------------------------
interface Props {
  devFather: StackKeys;
  devToolIndex: number;
  revreseCardRef: MutableRefObject<HTMLElement | null>;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function ReverseCard({
  devFather,
  revreseCardRef,
  devToolIndex
}: Props): ReactElement {
  // ---Redux States
  const { labels, data } = useSelector(
    (reducers: ReduxState) => reducers.languageReducer
  );
  const {
    imgRoute, title, expertiseNumber, expertise, stars, experience
  } = data.stack[devFather].devTools[devToolIndex];
  return (
    <Row
      key={experience}
      ref={revreseCardRef as Ref<HTMLDivElement>}
      className="reverse-card"
    >
      <Col xs={24} sm={24} md={8} lg={6} xl={6} xxl={6}>
        <img src={imgRoute} width="94%" alt={ownerData.name.withLast} />
      </Col>
      <Col
        style={{ padding: 10 }}
        xs={24}
        sm={24}
        md={16}
        lg={8}
        xl={8}
        xxl={8}
      >
        <h1>{title}</h1>
        <h2>
          Expertise:
          {' '}
          <span>{expertise}</span>
        </h2>
        <Progress
          strokeColor={{
            '0%': '#f801e2',
            '100%': '#1ef0ed'
          }}
          status="active"
          percent={expertiseNumber}
          showInfo={false}
        />
      </Col>
      <Col
        style={{ padding: 10 }}
        xs={24}
        sm={24}
        md={24}
        lg={10}
        xl={10}
        xxl={10}
      >
        <Row>
          <Col span={14}>
            <h3>{labels.enjoyUsing}</h3>
          </Col>
          <Col span={10}>
            <Rate disabled value={stars} />
          </Col>
        </Row>
        <h3>{labels.opinionAndUsage}</h3>
        <p>{experience}</p>
      </Col>
    </Row>
  );
}
