import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className='px-[30px] py-[15px] cursor-pointer bg-[#fff] p-[10px] rounded-2xl'>

                <div className='flex justify-between items-center'>
                    <div className='flex gap-[30px] items-center'>
                        <p className='bg-[#EBEEF6] text-[14px] pl-[30px] pr-[10px] py-[10px] rounded-md'>Hotline 24/7</p>
                        <p className='font-bold'>(91) 9876543210</p>
                    </div>
                    <div className='flex gap-[30px] items-center'>
                        <p className='text-[14px]'>Sell on Swoo</p>
                        <p className='text-[14px]'>Order Tracki</p>
                        <div className='text-[14px] flex gap-[10px]'>
                            <select>
                                <option>USD</option>
                            </select>|
                            <select>
                                <option>Eng</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className='mt-[25px] flex justify-between bg-[#fff] p-[10px] rounded-2xl'>
                    <div className='flex gap-[80px] items-center'>
                        <div>
                            <img src="/icons/logo.svg" alt="logo" />
                        </div>
                        <div className='flex gap-[45px] items-center uppercase'>
                            <p className='font-bold text-[14px]'>Homes</p>
                            <p className='font-bold text-[14px]'>Pages</p>
                            <p className='font-bold text-[14px]'>Products</p>
                            <p className='font-bold text-[14px]'>Contact</p>
                        </div>
                    </div>
                    <div className='flex gap-[30px] items-center'>
                        <div>
                            <img src="./icons/User.svg" alt="user" />
                        </div>
                        <div className='bg-[#EBEEF6] rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                            <img src="/icons/Vector.svg" alt="vector" />
                        </div>
                        <div className='flex gap-[10px] items-center'>
                            <div className='bg-[#EBEEF6] rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                                <img src="/icons/User.svg" alt="user" width={30} height={30} />
                            </div>
                            <div className='uppercase'>
                                <p className='text-[11px] text-[#666666]'>welcome</p>
                                <p className='text-[14px] font-bold'>Log in / Register</p>
                            </div>
                        </div>

                        <div className='flex gap-[10px] items-center'>
                            <div className='bg-[#EBEEF6] rounded-full h-[40px] w-[40px] flex justify-center items-center'>
                                <img src="/icons/Symbol.svg" alt="symbol" width={20} height={20} />
                            </div>
                            <div className='uppercase'>
                                <p className='text-[11px] text-[#666666]'>Cart</p>
                                <p className='text-[14px] font-bold'>$4,609.00</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <div className='bg-[#1ABA1A]  py-[20px] px-[15px] rounded-2xl flex gap-32'>
                <div className='flex gap-[35px] items-center bg-[#fff] rounded-3xl py-[8px] px-[30px]'>
                    <select >
                        <option>All Categories</option>
                    </select>
                    <input type="text" placeholder='Search anything....' />
                    <img src="/icons/search.svg" alt="search" />
                </div>
                <div className='flex gap-28 items-center'>
                    <p className='text-[#fff] uppercase text-[13px]'>free shipping over $199</p>
                    <p className='text-[#fff] uppercase text-[13px]'>30 days money back</p>
                    <p className='text-[#fff] uppercase text-[13px]'>100% secure payment</p>
                </div>
            </div>

        </>
    )
}

export default Navbar
