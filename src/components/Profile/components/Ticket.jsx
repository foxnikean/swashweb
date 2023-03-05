import React from 'react'
import party from "../../../assets/partyex.png";
import { SlCalender, SlLocationPin } from "react-icons/sl";
import qr from "../../../assets/qr.png";
const Ticket = () => {
  return (
    <div className='ticket-container'>
      <img className='ticket-img' src={party} alt='' />
      <span className='ticket-header'>90's Flashback</span>
      <div className='ticket-party-infos'>
        <span className='info'>
          <SlLocationPin /> Zorlu PSM - Türkcell Center{" "}
        </span>
        <span className='info'>
          <SlCalender /> 30 Mart 2023 02:45
        </span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi.
        Aliquam in hendrerit urna. Pellentesque sit amet sapien.
      </p>
      <div className='ticket-bottom'>
        <div className='ticket-user-infos'>
          <span>Dwayne Johnson</span>
          <span> Eu euismod tincidunt purus diam.</span>
        </div>
        <img className='qr-code' src={qr} alt='' />
      </div>
    </div>
  )
}

export default Ticket