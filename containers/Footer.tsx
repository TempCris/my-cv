// ---Dependencys
import { ReactElement } from 'react';
import Image from 'next/image';
import { Row, Col } from 'antd';
import {
  MailOutlined
} from '@ant-design/icons';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Other
import { ownerData } from 'Others/global-config';
// ----------------------------------------COMPONENT----------------------------------------
export default function Footer(): ReactElement {
  // ---Redux States
  const { labels } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  const grid = {
    xs: 12,
    sm: 12,
    md: 5,
    lg: 4,
    xl: 4,
    xxl: 3
  };
  return (
    <footer id="contact">
      <h1>{labels.contactMe}</h1>
      <Row justify="center">
        <Col className="contact-sticker" {...grid}>
          <section>
            <Image
              priority
              src="/images/footer/whats.svg" // Route of the image file
              height={34}
              width={34}
              alt={ownerData.name.withLast}
            />
          </section>
          <p>{ownerData.phoneStr}</p>
        </Col>
        <Col className="contact-sticker" {...grid}>
          <section>
            <MailOutlined />
          </section>
          <p>{ownerData.contactMail}</p>
        </Col>
      </Row>
      <h2>
        © 2021 Inc. All Rights Reserved
      </h2>
    </footer>
  );
}
