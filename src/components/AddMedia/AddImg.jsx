import React from "react";
import "react-icons";
import { BiPlusCircle } from "react-icons/bi";
const AddImg = () => {
  return (
    <div className='w-full mt-6'>
      <div className='w-full bg-gray-500 flex items-center justify-center h-64 rounded-xl'>
        <label className="w-full h-full flex items-center justify-center text-6xl text-bgwhite" htmlFor='img'>
          <BiPlusCircle />
        </label>
      </div>
      <input className='hidden' type='file' id='img' />
    </div>
  );
};

export default AddImg;
