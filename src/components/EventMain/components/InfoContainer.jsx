import React from 'react'
import { BiCalendar } from 'react-icons/bi'

const InfoContainer = ({icon, text}) => {
  return (
    <span className='flex gap-3 bg-bgwhite px-4 py-3 flex-grow rounded-md items-center justify-center text-xl font-semibold'>{icon} {text}</span>
  )
}

export default InfoContainer