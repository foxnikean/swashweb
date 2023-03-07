import React from "react";

const Input = ({ type, title ,onChange, value  }) => {
   return (
    <div className='container-grid'>
      <span className='input-title'>{title}</span>
      <input className='add-input' onChange={onChange} value={value} type={type} />
    </div>
  );
};

export default Input;
