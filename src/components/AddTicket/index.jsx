import React from "react";
import { BiPlus } from "react-icons/bi";
import Button from "./components/Button";
import TicketForm from "./components/TicketForm";
const AddTicket = () => {
  return (
    <div className='bg-[#C0BCCA] flex flex-col p-5 w-full mt-8 relative rounded-2xl'>
      <span className='text-[#58287F] font-semibold text-2xl  underline'>
        Etkinlik Biletleri
      </span>
      <div className="flex flex-col gap-2 my-4">
        <Button />
        <Button />
      </div>
      <TicketForm/>
    </div>
  );
};

export default AddTicket;
