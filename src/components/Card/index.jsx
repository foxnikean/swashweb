import React from "react";
import party from "../../assets/partyex.png";
import EventInfo from "./components/EventInfo";
import { useNavigate } from "react-router-dom";
const Card = ({location, time, name,img, event , url}) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-80 gap-4 bg-[#f6f6f6] p-4 rounded-[21px] cursor-pointer' onClick={() =>  navigate(`/Event/${event.eventName}`, { state: { event } })}>
      <img src={url ? url : img} alt='' />
      <span className="self-center font-bold text-xl">{name}</span>
      <EventInfo type='place' text={location} />
      <EventInfo type='date' text={time}/>
      <span className='text-justify'>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
      </span>
    </div>
  );
};

export default Card;
