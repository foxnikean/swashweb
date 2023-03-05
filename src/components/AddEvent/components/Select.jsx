import React from 'react'

const Select = ({title, options}) => {
  return (
    <div className="container-grid">
        <span className='input-title'>{title}</span>
        <select className='add-input'>
            {options.map(option => (
                <option value={option.value}>{option.text}</option>
            ))}
        </select>
    </div>
  )
}

export default Select