import React from "react";
import logo from "../../../assets/org-logo.png";
import { BiPhone, BiPin } from "react-icons/bi";
import {AiOutlineInstagram} from "react-icons/ai"
const OrganisatorInfoBox = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-bgwhite relative py-20 rounded-lg'>
      <div className="flex flex-col items-center px-10">
        <img className="absolute -top-16" src={logo} alt='' />
        <span className="text-2xl font-bold">Organisator Name</span>
        <span>Video</span>
      </div>
      <div className="flex flex-col w-full px-5 gap-5 mt-10">
        <span className="flex items-center gap-4 text-xl  underline font-extrabold">İletişim</span>
        <span className="flex items-center gap-4 text-xl font-bold"><BiPhone/> telefon no</span>
        <span className="flex items-center gap-4 text-xl font-bold"><BiPin/> location</span>
        <span className="flex items-center gap-4 text-xl font-bold"><AiOutlineInstagram/> instagram</span>
      </div>
    </div>
  );
};

export default OrganisatorInfoBox;
