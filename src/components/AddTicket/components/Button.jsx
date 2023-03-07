import React from "react";

const Button = ({text, subText,icon}) => {
  return (
    <button className="flex items-center bg-[#D9D9D9] h-16 text-xl justify-between px-3 border-2 border-[#58287F] rounded-xl">
      <span>{text}</span>
      <button>{subText}</button>
       {icon}
    </button>
  );
};

export default Button;
