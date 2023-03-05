import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ handleSearch, setSearchQuerry }) => {
  return (
    <div className='w-full relative'>
      <input
        type='text'
        className='w-full bg-white h-16 rounded-md pl-20 min-w-96'
        onChange={(e) => handleSearch(e)}
        onBlur={() => setSearchQuerry("")}
        placeholder='Etkinlik Ara..'
      />
      <BiSearch className='absolute left-8 text-2xl top-1/3' />
    </div>
  );
};

export default SearchBar;
