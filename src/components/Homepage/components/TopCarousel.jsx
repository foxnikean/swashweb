import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import { getEventsAsync } from "../../../stores/eventsSlice";

export default function TopCarousel(props) {
  const ref = useRef();
  const events = useSelector(state => state.eventsData.data)
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(getEventsAsync())
  }, []);
const data =    [
    {
        cover: events[0]?.image,
        title: "Icon man 3",
      },
      {
        cover: events[1]?.image,
        title: "Inception",
      },
      {
        cover: events[2]?.image,
        title: "Blade Runner 2049",
      },
      {
        cover: events[3]?.image,
        title: "Icon man 3",
      },
  ] 
  return (
    <div style={{ width: "100%", position: "relative", display:"flex", flexDirection:"column", alignItems:"center", gap:"2.25em",zIndex:"20" }}>
      <h2 className="top-carousel-header">SWASH SPECIALS</h2>
      <ResponsiveContainer
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 750}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
              useGrabCursor
            />
          );
        }}
      />{" "}
      <></>{" "}
    </div>
  );
}

// Very import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below
export const Card = React.memo(function (props) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 300,
        userSelect: "none",
      }}
      className='my-slide-component'
    >
      <img
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 0,
        }}
        className='border border-solid border-mor'
        draggable={false}
        src={cover}
      />{" "}
    </div>
  );
});
