import React from "react";

const Checkbox = ({ id, isChecked, setRules,text }) => {
  return (
    <div className="checkbox-container">
      <input
        type='checkbox'
        id={id}
        className=""
      />
      <label htmlFor={id} className="text-2xl">{text}</label>
    </div>
  );
};

export default Checkbox;
