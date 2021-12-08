// ---Dependencys
import { ReactElement, useState } from 'react';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Types
import { JobDetail } from '@Reducers/language/customTypes';
// ---Component
import TimeLine from 'Comp/MainCV/WorkTiemeLine/TimeLine';
import ExpModal from 'Comp/MainCV/WorkTiemeLine/ExpModal';

// ------------------------------------------ COMPONENT-----------------------------------------
export default function WorkTiemeLine(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { labels, data } = useSelector((reducers: ReduxState) => reducers.languageReducer);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalJob, setModalJob] = useState<JobDetail>(data.workExp[0]);
  // ------------------------Main Methods-------------------------
  function showModal() {
    setIsModalVisible(true);
  }

  function handleOk() {
    setIsModalVisible(false);
  }

  function handleCancel() {
    setIsModalVisible(false);
  }
  return (
    <div id="exp" className="work-time">
      <h1>{labels.workExp}</h1>
      <TimeLine
        setModalJob={setModalJob}
        showModal={showModal}
        workExp={data.workExp}
      />
      <ExpModal
        isModalVisible={isModalVisible}
        handleOk={handleOk}
        handleCancel={handleCancel}
        title={modalJob.title}
        detail={modalJob.description}
      />
    </div>
  );
}
