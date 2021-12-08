// ---Dependencys
import { ReactElement } from 'react';
import { Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import Carousel from 'react-multi-carousel';
import './index.less';
// ---Types
import { JobDetail } from '@Reducers/language/customTypes';

// ------------------------------------------ AUX COMP
interface WorkItemProps {
  urlImg: string;
  company: string;
  title: string;
  time: string;
  date: string;
  onClicK: ()=> void;
}
function WorkItem(props: WorkItemProps) {
  const {
    urlImg, company, title, time, date, onClicK
  } = props;
  return (
    <div className="work-item">
      <img src={urlImg} alt="steve" />
      <h3>{company}</h3>
      <h5>{date}</h5>
      <h4 className="time">{time}</h4>
      <h4>{title}</h4>
      <Button onClick={onClicK} type="primary">
        More details
        <ArrowRightOutlined />
      </Button>
    </div>
  );
}
// ------------------------------------------ PROPS-----------------------------------------
interface Props {
  workExp: Array<JobDetail>;
  setModalJob: (job: JobDetail)=>void;
  showModal: ()=>void;
}
// ------------------------------------------ COMPONENT-----------------------------------------
export default function TiemeLine(props: Props): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { showModal, setModalJob, workExp } = props;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 992, min: 576 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 576, min: 0 },
      items: 1
    }
  };
  // ------------------------Main Methods-------------------------
  function onClickItem(job: JobDetail) {
    setModalJob(job);
    showModal();
  }
  return (
    <Carousel
      swipeable
      draggable={false}
      showDots
      responsive={responsive}
      ssr // means to render carousel on server-side.
      autoPlaySpeed={1000}
      keyBoardControl
      transitionDuration={500}
      containerClass="carousel-container"
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {
        workExp.map((jobExp) => (
          <div className="carrousel" key={jobExp.title}>
            <WorkItem
              urlImg={jobExp.urlImg}
              time={jobExp.time}
              company={jobExp.company}
              title={jobExp.title}
              date={jobExp.date}
              onClicK={() => { onClickItem(jobExp); }}
            />
          </div>
        ))
      }
    </Carousel>
  );
}
