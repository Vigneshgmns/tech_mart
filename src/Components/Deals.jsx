// import React, { useEffect, useState } from 'react'
import Slider from './Slider'

export const Deals = () => {
    // const [time, setTime] = useState(new Date())
    //     useEffect(() => {
    //         setInterval(() => setTime(new Date()),10000  )
    //     }, [])
    //    console.log(time)
    return (
        <>
            <div className='bg-[#1ABA1A] flex justify-between px-[20px] py-[10px] items-center w-[960px] rounded-xl'>
                <p className='text-[#fff] m-0'>Deals of the day</p>
                <p className='text-[#fff] m-0'>View All</p>
            </div>
            <div className='flex gap-7'>
                <div className='flex gap-48 bg-white w-[960px] rounded-xl p-[20px]'>
                    <Slider />
                    <div className='flex flex-col gap-6 pt-[20px] pl-[20px]'>
                        <p className='font-bold text-[16px]'>Xioma Redmi Note 11 Pro 256GB 2023, Black
                            Smartphone</p>
                        <p className='flex gap-[10px] text-[#F1352B] font-bold'>$569.00 <p className='line-through mt-[3px] text-[12px] text-[#666666]'>$759.00</p></p>
                        <ul className='list-disc'>
                            <li> Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core</li>
                            <li>  DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                            <li>  Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
                        </ul>
                        <div className='flex gap-[30px]'>
                            <div className='bg-green-50 rounded-xl px-[20px] py-[10px]'>
                                <p className='text-[#1ABA1A] m-0'>FREE SHIPPING</p>
                            </div>
                            <div className='bg-red-50 rounded-xl px-[20px] py-[10px]'>
                                <p className='text-[#F1352B] m-0'>FREE GIFT</p>
                            </div>
                        </div>
                        <div>
                            <div className='flex'>
                                <p className='text-[13px] font-medium uppercase'>hurry up!
                                    Promotion will
                                    expires in</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-5 '>
                    <img src="/images/dales1.png" alt="" className='rounded-xl' />
                    <img src="/images/dales2.png" alt="" className='rounded-xl' />
                    <img src="/images/dales1.png" alt="" className='rounded-xl' />
                </div>

            </div>
        </>
    )
}
