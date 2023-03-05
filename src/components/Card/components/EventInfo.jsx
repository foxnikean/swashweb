import React from "react";
import { BiCalendar, BiPin } from "react-icons/bi";

const EventInfo = ({ type,text }) => {
  return (
    <div className="flex items-center gap-3 ">
      {type === "place" ? <BiPin /> : <BiCalendar />}
      <span>{text}</span>
    </div>
  );
};

export default EventInfo;
