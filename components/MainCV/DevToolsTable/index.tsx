// ---Dependencys
import { ReactElement, useState, useRef } from 'react';
import { Tabs } from 'antd';
// ---Redux
import { useSelector } from 'react-redux';
import { ReduxState } from 'Reducers';
// ---Types
import { StackKeys } from '@Reducers/language/customTypes';
// ---Comps
import FrontalCard from 'Comp/MainCV/DevToolsTable/FrontalCard';
import ReverseCard from 'Comp/MainCV/DevToolsTable/ReverseCard';

const { TabPane } = Tabs;

// ------------------------------------------ COMPONENT-----------------------------------------
export default function DevToolsTable(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const { languageReducer, appInfoReducer } = useSelector((reducers: ReduxState) => reducers);
  const { labels } = languageReducer;
  const { isMovil } = appInfoReducer;
  const { first, second, third } = labels.DevSkills;
  // ---State
  interface State {
    devFather: StackKeys;
    devToolIndex: number;
    reverse: boolean;
  }
  const initalState: State = {
    devFather: 'front',
    devToolIndex: 0,
    reverse: false
  };
  const [state, changeState] = useState(initalState);
  const revreseCardRef = useRef<null | HTMLElement>(null);
  // ------------------------Main Method-------------------------
  function onToolChange(devFather: StackKeys, devToolIndex: number) {
    changeState({ ...state, devFather, devToolIndex });
    if (isMovil) {
      scrollToReverse();
    }
  }
  // ------------------------Aux Method-------------------------
  function scrollToReverse() {
    if (revreseCardRef && revreseCardRef.current) {
      revreseCardRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }
  // ------------------------Render-------------------------
  return (
    <div className="dev-tools">
      <Tabs defaultActiveKey={first}>
        <TabPane tab={first} key={first}>
          <FrontalCard
            onToolChange={onToolChange}
            devFather="front"
          />
          <ReverseCard
            revreseCardRef={revreseCardRef}
            devFather={state.devFather}
            devToolIndex={state.devToolIndex}
          />
        </TabPane>
        <TabPane tab={second} key={second}>
          <FrontalCard
            devFather="back"
            onToolChange={onToolChange}
          />
          <ReverseCard
            revreseCardRef={revreseCardRef}
            devFather={state.devFather}
            devToolIndex={state.devToolIndex}
          />
        </TabPane>
        <TabPane tab={third} key={third}>
          <FrontalCard
            devFather="arch"
            onToolChange={onToolChange}
          />
          <ReverseCard
            revreseCardRef={revreseCardRef}
            devFather={state.devFather}
            devToolIndex={state.devToolIndex}
          />
        </TabPane>
      </Tabs>
    </div>
  );
}
