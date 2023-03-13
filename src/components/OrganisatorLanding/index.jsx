import React from "react";
import { useNavigate } from "react-router-dom";

const OrganisatorLand = () => {
  const navigate = useNavigate()
  return (
    <div className='flex flex-col items-center pt-56 bg-bgwhite min-h-screen'>
      <div className="flex flex-col items-center w-5/6">

      <span className="text-6xl font-bold text-center  leading-relaxed">Neden organizasyon paylaşımları Swash’te olmalı?</span>
      <span>
        Id blandit gravida lorem ultrices. Urna sed nulla integer sed. Duis
        mauris nisl sit egestas ac sed ullamcorper.
      </span>
      <div className="w-full flex items-center  justify-center gap-16 mt-10">
        <button className="border-gray-500 rounded-lg border-2 px-5 py-2 hover:bg-gray-500 hover:text-white transition-all" onClick={() => navigate("/OrgRegister")}>Yayınlamaya Başla</button>
        <button className="border-gray-500 rounded-lg border-2 px-5 py-2  hover:bg-gray-500 hover:text-white transition-all" >Bizimle İletişime Geç</button>
      </div>
      </div>
    </div>
  );
};

export default OrganisatorLand;
