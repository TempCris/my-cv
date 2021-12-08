// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Others
import { ownerData } from 'Others/global-config';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function Introduction(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  // ---Redux States
  const { data, labels } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  const { winSize } = useSelector((reducers: ReduxState) => reducers.appInfoReducer);
  // ---Main Methods
  function getClassname() {
    if (winSize === 'xs' || winSize === 'sm' || winSize === 'md') {
      return 'introduction-movil';
    }
    return 'introduction-desk';
  }
  // -----------------------------------Render---------------------------------
  return (
    <Row id="intro" className={getClassname()}>
      <Col className="name" xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
        <span>{ownerData.name.withLast}</span>
      </Col>
      <Col
        xs={24}
        sm={24}
        md={{ span: 12, offset: 2 }}
        lg={{ span: 10, offset: 2 }}
        xl={{ span: 10, offset: 2 }}
        xxl={{ span: 8, offset: 2 }}
      >
        <Row gutter={[0, 25]} className="description">
          <Col span={24}>
            <Row>
              <Col span={6}>
                <img
                  src="/images/profile.png" // Route of the image file
                  width="110px"
                  alt={ownerData.name.withLast}
                />
              </Col>
              <Col offset={2} span={16}>
                <h1>{labels.introduction}</h1>
              </Col>
            </Row>
          </Col>
          <Col span={16}>
            <p>{data.introduction}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
