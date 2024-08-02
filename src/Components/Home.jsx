import React from 'react'
import { Banner } from './Banner'
import AppContext from './AppContext'
import { BrandsCategorie } from './BrandsCategorie'

const brandData=[
  {
    image:'/icons/jawk.svg'
  },{
    image:'/icons/digitek.svg'
  },{
    image:'/icons/tek.svg'
  },{
    image:'/icons/grafbase.svg'
  },{
    image:'/icons/msi.svg'
  },{
    image:'/icons/bear.svg'
  },{
    image:'/icons/oak.svg'
  },{
    image:'/icons/snyk.svg'
  },{
    image:'/icons/sonex.svg'
  },{
    image:'/icons/stropi.svg'
  }
]

const categoryData=[
  {
    image:'/images/laptop.svg',
    title:'laptop'
  },{
    image:'/images/pc.svg',
    title:'PC gaming'
  },{
    image:'/images/headphones.svg',
    title:'headphone'
  },{
    image:'/images/cpu.svg',
    title:'monitor'
  }
]




const Home = () => {
  return (
    <>
     <Banner/>
     <AppContext className='flex gap-[16px] '>
      <BrandsCategorie title={"featured brands"} data={brandData}/>
      <BrandsCategorie title={"top categories"} data={categoryData}/>
    </AppContext> 
    </>
  )
}

export default Home
