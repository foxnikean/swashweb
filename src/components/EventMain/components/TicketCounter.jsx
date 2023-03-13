import React, { useState } from "react";
import { BiCaretDown, BiCaretUp, BiPlus } from "react-icons/bi";

const TicketCounter = ({ name, tickets }) => {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [sum, setSum] = useState(0);

  const handleIncrementNum = (index) => {
    const nextCounters = counts.map((c, i) => {
      if (i === index) {
        // Increment the clicked counter
        return c + 1;
      } else {
        // The rest haven't changed
        return c;
      }
    });
    setCounts(nextCounters);
  };

  const handleIncrementSum = (e) => {
    const add = parseInt(e.target.id);
    setSum(sum + add);
  };

  const handleDecreaseNum = (index) => {
    const nextCounters = counts.map((c, i) => {
      if (i === index && c != 0) {
        return c - 1;
      } else {
        return c;
      }
    });
    setCounts(nextCounters);
  };

  const handleDecreaseSum = (e) => {
    const neg = parseInt(e.target.id);
    setSum(sum - neg);
  };
  return (
    <div className='flex flex-col justify-center items-center pt-10 pb-20 w-full bg-bgwhite px-10 gap-10 relative mt-5 rounded-lg'>
      <span className='text-2xl font-bold'>{name}</span>
      <ul className='flex flex-col w-full'>
        {tickets.map((ticket, i) => (
          <li className='flex w-full justify-between' key={i}>
            <div className='flex flex-col items-start text-xl font-medium'>
              <span>{ticket.name}</span>
              <span>{ticket.price} ₺</span>
            </div>
            <div className='flex items-center gap-5 text-xl justify-center'>
              <button
              onClick={(e) => {
                handleIncrementNum(i);
                handleIncrementSum(e);
              }}
              
                className='text-spurple text-4xl'
              >
                <span id={ticket.price}>+</span>
              </button>
              <span className='bg-white text-black px-5 rounded-md'>{counts[i]}</span>
              <button
                className=' text-spurple text-4xl'
                onClick={(e) => {
                    handleDecreaseNum(i);
                    handleDecreaseSum(e);
                  }}
              >
                <span id={ticket.price}>-</span>
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className='bg-slate-50 w-full flex justify-between flex-col gap-3 py-2 px-4 rounded-md'>
        <div className='w-full justify-between flex font-bold text-lg'>
          <span>Ara Toplam :</span>
          <span>{sum} ₺</span>
        </div>
        <div className='w-full justify-between flex font-bold text-lg'>
          <span>Total :</span>
          <span>{sum} ₺</span>
        </div>
      </div>
      <button className='bg-white text-xl font-bold px-10 py-2 absolute rounded-md -bottom-5 border-2 border-black hover:translate-y-2 transition-all'>
        Satın Al
      </button>
    </div>
  );
};

export default TicketCounter;
