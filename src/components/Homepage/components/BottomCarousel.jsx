import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoIosCalendar,
  IoIosClock,
  IoIosPin,
} from "react-icons/io";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { getEventsAsync } from "../../../stores/eventsSlice";
import Card from "../../Card";
const BottomCarousel = () => {
  const navigate = useNavigate();
  const events = useSelector((state) => state.eventsData.data);
  const dispatch = useDispatch();

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    dispatch(getEventsAsync());
  }, []);


  return (
    <div className='container mx-auto mt-36'>
      <h3 className='text-white  mt-10 text-3xl font-bold mb-8'>
        Yaklaşan Etkinlik
      </h3>
      <Carousel
        infinite={true}
        responsive={responsive}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        ssr
        centerMode={true}
        customLeftArrow={
          <IoIosArrowBack className='absolute top-50 left-0 cursor-pointer text-6xl text-black rounded  h-full bg-opacity-30 ' />
        }
        customRightArrow={
          <IoIosArrowForward className='absolute right-0 top-50 cursor-pointer  text-6xl  text-black  rounded-l h-full bg-opacity-50' />
        }
        className='cursor-pointer  '
      >
        {events.map((event, i) => (
          <Card
            key={i}
            location={event.place}
            time={event.startTime}
            name={event.name}
            img={event.image}
            event={event}
            price={event.tickets[0].price}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default BottomCarousel;
