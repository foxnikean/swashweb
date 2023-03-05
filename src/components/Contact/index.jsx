import React from "react";
import Map from "../Map";
import "./Contact.scss";
import { BiMailSend } from "react-icons/bi";
const Contact = () => {
  return (
    <div className='bg-bgwhite w-full min-h-screen ml-[303px]'>
      <div className='flex flex-col items-center justify-center h-full px-32 gap-6'>
        <span className='text-4xl font-bold'>Adres</span>
        <span className='text-4xl text-center'>
          ATATÜRK MAH. ERTUĞRUL GAZİ SK METROPOL ISTANBUL SİTESİ C1 BLOK NO: 2B
          İÇ KAPI NO: 376 ATAŞEHİR / İSTANBUL
        </span>
        <span className='text-3xl flex items-center gap-3'>
          <BiMailSend className="mt-2"/> destek@swashticket.com
        </span>
      </div>
    </div>
  );
};

export default Contact;
