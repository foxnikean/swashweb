import React from 'react'

const Select = ({title, options, onChange, value}) => {
  return (
    <div className="container-grid">
        <span className='input-title'>{title}</span>
        <select className='add-input' onChange={onChange} value={value}>
            {options.map(option => (
                <option value={option.value}>{option.text}</option>
            ))}
        </select>
    </div>
  )
}

export default Select