import { ReactElement, useRef, Ref } from 'react';
import { VerticalAlignTopOutlined } from '@ant-design/icons';

export default function BackTop(): ReactElement {
  // ------------------------Const, States and Hooks-------------------------
  const topRef = useRef<null | HTMLElement>(null);
  // ------------------------Main Method-------------------------
  function scrollToTop() {
    topRef.current!.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <>
      <div ref={topRef as Ref<HTMLDivElement>} className="back-top-top" />
      <button type="button" className="back-top-button" onClick={scrollToTop}>
        <VerticalAlignTopOutlined />
      </button>
    </>
  );
}
