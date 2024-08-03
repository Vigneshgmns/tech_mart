import React from 'react'
import AppContext from './AppContext'

export const Banner = () => {
  return (
    <AppContext className='flex gap-[20px] mt-[10px] mb-[20px]'>
      <div className='bg-white rounded-xl px-[70px] w-[300px] py-[20px]'>
        <p className='text-[red] font-bold text-[14px] uppercase mt-[9px]'>sale 40% off</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>laptops</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>pc & computers</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>cell phones</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>tablets</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>gaming & vr</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>networking</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>cameras</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>sounds</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>office</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>storge, USB</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>accessories</p>
        <p className=' capitalize text-[13px] font-semibold mt-[8px]'>clearance</p>
      </div>

      <div >
        <div className='relative'>
          <img src="/images/slider1.png" alt="" className='rounded-xl' />
          <div className='absolute top-[35px] left-[40px]  text-white'>
            <p className='font-bold text-[30px]'>Noise Cancelling
              <p className='text-[35px] font-extralight mb-[20px]'>Headphone</p> </p>
            <p className='pl-[25px] text-[14px] font-thin'>Boso Over-Ear Headphone</p>
            <p className='pl-[25px] text-[14px] font-thin'>Wifi, Voice Assistant,</p>
            <p className='pl-[25px] text-[14px] font-thin'>Low latency game mde</p>
            <button className='mt-[25px] bg-white text-black rounded-xl px-[30px] py-[10px]'>Buy Now</button>
          </div>
        </div>
        <div className='flex gap-[15px] mt-[10px]'>
          <div className='relative'>
            <img src="/images/slider2.png" alt="" className='rounded-xl' />
            <div className='absolute top-[15px] left-[15px]'>
              <p className='font-medium text-[15px] capitalize'>sono playgo</p>
              <p className='flex gap-2 font-medium text-[15px]'>from<p className='text-[#1ABA1A]'>$679</p></p>
              <p className='text-[12px] font-normal underline uppercase mt-[25px]'>discover now</p>
            </div>
          </div>
          <div className='relative'>
            <img src="/images/slider3.png" alt="" className='rounded-xl' />
            <div className='absolute top-[15px] left-[15px] text-white'>
              <p className='font-medium text-[15px] capitalize'>Logitek Bluetooth</p>
              <p className='flex gap-2 font-medium text-[15px] text-yellow-400'>Keyboard</p>
              <p className='text-[12px] font-normaluppercase capitalize mt-[25px]'>best for all devices</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className='relative'>
          <img src="/images/slider4.png" alt="" className='rounded-xl' />
          <div className='absolute top-[20px] right-[15px]'>
            <p className='uppercase font-normal text-[10px] mb-[10px]'>xomia</p>
            <p className='font-semibold text-[19px]'>Sport Water <p> Resistance</p> Watch</p>
            <button className='mr-[10px] mt-[20px] bg-black text-white rounded-xl px-[30px] py-[10px]'>Buy Now</button>
          </div>
        </div>
        <div className='mt-[15px] relative'>
          <img src="/images/slider5.png" alt="" className='rounded-xl' />
          <div className='absolute top-[15px] left-[20px] text-white'>
            <p className='font-bold text-[23px] uppercase'>OKODo <p className='font-light'>hero 11+</p><p className='font-light'>black</p> </p>
            <p className='mt-[25px] uppercase font-thin text-[13px] text-[#9999]'>from<p className='text-[#1ABA1A] font-semibold text-[18px]'>$699</p></p>
          </div>
        </div>
      </div>

    </AppContext>
  )
}
