import React from "react";
import "react-icons/bi"
import { BiPlusCircle } from "react-icons/bi";
const AddVid = () => {
  return (
    <div className=' mt-6'>
      <div className='w-64 bg-gray-500 flex items-center justify-center h-96 rounded-xl'>
        <label
          className='w-full h-full flex items-center justify-center text-6xl text-bgwhite'
          htmlFor='img'
        >
          <BiPlusCircle />
        </label>
      </div>
      <input className='hidden' type='file' id='img' />
    </div>
  );
};

export default AddVid;
