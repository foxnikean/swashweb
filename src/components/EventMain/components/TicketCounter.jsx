import React from 'react'

const TicketCounter = () => {
    return (
        <div className='flex flex-col justify-center items-center pt-10 w-full bg-bgwhite px-10 gap-10'>
            <span className='text-2xl font-bold'>title</span>
            <ul className='flex flex-col w-full'>
                <li className='flex w-full justify-between' >
                    <div className='flex flex-col'>
                        <span>title</span>
                        <span>price</span>
                    </div>
                    <div className='flex items-center gap-5'>
                        <button>-</button>
                        <span>count</span>
                        <button>+</button>
                    </div>
                </li>
            </ul>
            <div className='bg-white'>
                <div>
                    <span>Ara Toplam</span>
                    <span>Değer</span>
                </div>
                <div>
                    <span>Total</span>
                    <span>Değer</span>
                </div>
            </div>
            <button>Satın Al</button>
        </div>
    )
}

export default TicketCounter