// ---Dependencys
import { ReactElement } from 'react';
import { Modal } from 'antd';

// ------------------------------------------ PROPS-----------------------------------------
interface ExpModalProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  title: string;
  detail: string;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function ExpModal(props: ExpModalProps): ReactElement {
  const {
    isModalVisible, handleOk, handleCancel, title, detail
  } = props;
  return (
    <Modal
      title={<span className="custom-ant-title">{title}</span>}
      visible={isModalVisible}
      onOk={handleOk}
      onCancel={handleCancel}
      width="85%"
    >
      <p>{detail}</p>
    </Modal>
  );
}
