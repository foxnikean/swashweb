import React from "react";

const Input = ({ type, title,setRules,rules }) => {
   return (
    <div className='container-grid'>
      <span className='input-title'>{title}</span>
      <input className='add-input' type={type} />
    </div>
  );
};

export default Input;
