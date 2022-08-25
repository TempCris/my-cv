/* eslint-disable max-len */
// ---Dependencys
import { ReactElement } from 'react';
import { Row, Col } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
// ---Others
import { ownerData } from 'Others/global-config';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function WorkTiemeLine(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------

  // ------------------------Main Methods-------------------------
  return (
    <Row className="extras-container" justify="space-around">
      <Col span={24}>
        <h1>Extras</h1>
      </Col>
      <Col xs={24} sm={24} md={{ span: 10, push: 2 }} lg={{ span: 10, push: 2 }} xl={{ span: 9, push: 3 }} xxl={{ span: 9, push: 3 }}>
        <a href="/downloads/cv.pdf" download>
          <img src="/images/Extra/pdf.jpeg" alt="Axelo Sotomayor" />
          <h2>PDF</h2>
          <button className="glow-on-hover " type="button">
            CV in PDF
            <CaretRightOutlined />
          </button>
        </a>
      </Col>
      <Col xs={24} sm={24} md={{ span: 10, pull: 2 }} lg={{ span: 10, pull: 2 }} xl={{ span: 9, pull: 3 }} xxl={{ span: 9, pull: 3 }}>
        <a
          href={ownerData.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/images/Extra/catgithub.jpeg" alt="Axelo Sotomayor" />
          <h2>Code of this repo</h2>
          <button className="glow-on-hover " type="button">
            (made by me)
            <CaretRightOutlined />
          </button>
        </a>
      </Col>
    </Row>
  );
}
