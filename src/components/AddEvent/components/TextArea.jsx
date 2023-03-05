import React from "react";

const TextArea = ({ title }) => {
  return (
    <div className='container-grid'>
      <span className='input-title'>{title}</span>
      <textarea
        className='add-input text-area'
        name=''
        id=''
        cols='30'
        rows='10'
      ></textarea>
    </div>
  );
};

export default TextArea;
