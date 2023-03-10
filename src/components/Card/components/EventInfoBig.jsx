import React from 'react'

const EventInfoBig = ({title, text, button}) => {
  return (
    <div className='flex flex-col gap-5 px-10 py-10 bg-bgwhite rounded-md'>
        <span className='text-xl font-bold text-spurple'>{title}</span>
        <span className=''>{text}</span>
        {button ? 
        <button className='bg-spurple text-white w-64 rounded-lg px-4 py-3'>Devamını Oku</button> : null
    }
    </div>
  )
}

export default EventInfoBig