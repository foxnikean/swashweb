import React from "react";
import InfoContainer from "./components/InfoContainer";
import { BiAlarm, BiCalendar, BiPin } from "react-icons/bi";
import party from "../../assets/partyex.png";
import EventInfoBig from "../Card/components/EventInfoBig";
import { useLocation } from "react-router-dom";
import bg from "../../assets/event-bg.png";
import TicketCounter from "./components/TicketCounter";
import OrganisatorInfoBox from "./components/OrganisatorInfoBox";
const EventMain = () => {
  const params = useLocation();
  const event = params.state.event;
  console.log(event.eventDesc);
  return (
    <div className='ml-[303px] bg-white w-full'>
      <div
        style={{ gridTemplateColumns: "4fr 2fr" }}
        className=' grid  w-full min-h-screen gap-x-10 px-5'
      >
        <div className=' py-5 flex flex-col gap-5 w-full h-full'>
          <img className='w-full' src={party} alt='' />
          <div className='flex justify-between w-full gap-3'>
            <InfoContainer icon={<BiCalendar />} text={event.startDate} />
            <InfoContainer icon={<BiAlarm />} text={event.startTime} />
            <InfoContainer icon={<BiPin />} text={event.place} />
          </div>
          <EventInfoBig
            title='Açıklama'
            text={event.description}
            button={true}
          />
          <EventInfoBig title='Kurallar' text={event.rules} button={true} />
          <EventInfoBig title='Mekan' text={event.address} button={false} />
        </div>
        <div className='h-full w-full flex flex-col gap-40'>
          <TicketCounter name={event.name} tickets={event.tickets} />
          {/* <OrganisatorInfoBox /> */}
        </div>
      </div>
    </div>
  );
};

export default EventMain;
