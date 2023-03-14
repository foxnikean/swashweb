import React from "react";
import party from "../../assets/partyex.png";
import EventInfo from "./components/EventInfo";
import { useNavigate } from "react-router-dom";
const Card = ({location, time, name,img, event , url, price}) => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col w-80 gap-4 bg-[#f6f6f6] p-4 rounded-[21px] cursor-pointer h-[420px]' onClick={() =>  navigate(`/Event/${event.name}`, { state: { event } })}>
      <img className="w-full h-40" src={url ? url : img} alt='' />
      <span className="self-center font-bold text-xl">{name}</span>
      <EventInfo type='place' text={location} />
      <EventInfo type='date' text={time}/>
      <span className='text-justify w-72 text-ellipsis whitespace-nowrap overflow-hidden'>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
      </span>
      <button className="bg-spurple text-white py-3 w-full rounded-lg">{price} ₺'den başlayan fiyatlarla</button>
    </div>
  );
};

export default Card;
