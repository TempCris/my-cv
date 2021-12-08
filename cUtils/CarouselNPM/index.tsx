import React from 'react';
import './index.css';
import Carousel from 'react-multi-carousel';

export default function CarouselNPM(): React.ReactElement {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
      <Carousel
        swipeable
        draggable={false}
        showDots
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite
        autoPlaySpeed={1000}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <section className="item">Item 1</section>
        <section className="item">Item 2</section>
        <section className="item">Item 3</section>
        <section className="item">Item 4</section>
        <section className="item">Item 5</section>
      </Carousel>
    </div>
  );
}
