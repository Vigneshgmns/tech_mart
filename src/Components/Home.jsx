import React, { useState } from 'react'
import { Banner } from './Banner'
import AppContext from './AppContext'
import { BrandsCategorie } from './BrandsCategorie'
import { Deals } from './Deals'
import { Card } from './Card'

const brandData = [
  {
    image: '/icons/jawk.svg'
  }, {
    image: '/icons/digitek.svg'
  }, {
    image: '/icons/tek.svg'
  }, {
    image: '/icons/grafbase.svg'
  }, {
    image: '/icons/msi.svg'
  }, {
    image: '/icons/bear.svg'
  }, {
    image: '/icons/oak.svg'
  }, {
    image: '/icons/snyk.svg'
  }, {
    image: '/icons/sonex.svg'
  }, {
    image: '/icons/stropi.svg'
  }
]

const categoryData = [
  {
    image: '/images/laptop.svg',
    title: 'laptop'
  }, {
    image: '/images/pc.svg',
    title: 'PC gaming'
  }, {
    image: '/images/headphones.svg',
    title: 'headphone'
  }, {
    image: '/images/cpu.svg',
    title: 'monitor'
  }
]


const cardData = [
  {
    img: "/images/heads.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    originalPrice: "$359.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
  }, {
    img: "/images/tab.png",
    title: "OPod Pro 12.9 Inch M1 2023,64GB + Wifi, GPS",
    quantity: "(152)",
    actualPrice: "$598.00",
    discountedPrice: '$720.00',
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
  }, {
    img: "/images/wifi.png",
    title: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /VGA 8GB",
    quantity: "(8)",
    actualPrice: "$1,259.00",
    discountedPrice: '$2,200.00',
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: false,
  }, {
    img: "/images/watch.png",
    title: "Opplo Watch Series 8 GPS +Cellular Stainless Steel Case with Milanese Loop",
    quantity: "",
    priceRange: "$959.00 - $1,678.99",
    isFreeShipping: false,
    isFreeGift: false,
    isInStock: false,
  }, {
    img: "/images/charge.png",
    title: "iSmart 24V Charger",
    quantity: "(9)",
    actualPrice: "$9.00",
    discountedPrice: '$22.00',
    isFreeShipping: false,
    isFreeGift: false,
    isInStock: false,
  },
]




const Home = () => {
  const [head, setHade] = useState('best')
  return (
    <>
      <Banner />
      <AppContext className='flex gap-[16px] '>
        <BrandsCategorie title={"featured brands"} data={brandData} />
        <BrandsCategorie title={"top categories"} data={categoryData} />
      </AppContext>
      <AppContext>
        <Deals />
      </AppContext>
      <AppContext className="flex justify-center">
        <div className="py-[34px] flex gap-[10px] items-center">
          <img src="/images/stra.png" alt="" width={20} />
          <p className="text-[#fff] flex gap-[5px]">
            Member get <p className="text-[#FFE400]">Free Shipping</p> with no
            order minimum!. *Restriction apply
          </p>
        </div>
      </AppContext>
      <AppContext className=" bg-[#fff] rounded-2xl px-[30px] py-[20px] cursor-pointer">
        <div className="flex justify-between">
          <div className='flex gap-4'>
            <p className={`${head == 'best' ? 'font-bold underline' : ''}`} onClick={() => setHade('best')}>Best Seller</p>
            <p className={`${head == 'new' ? 'font-bold underline' : ''}`} onClick={() => setHade('new')}>New IN</p>
            <p className={`${head == 'popular' ? 'font-bold underline' : ''}`} onClick={() => setHade('popular')}>Popular</p>
          </div>
          <div>
            <p className='text-[#666]'>View All </p>
          </div>
        </div>
        <div className="flex gap-[20px] items-center">
          {cardData.map((i, ind) => (
            <Card
              key={ind}
              img={i.img}
              originalPrice={i.originalPrice}
              title={i.title}
              quantity={i.quantity}
              isFreeGift={i.isFreeGift}
              isFreeShipping={i.isFreeShipping}
              isInStock={i.isInStock}
              priceRange={i.priceRange}
              actualPrice={i.actualPrice}
              discountedPrice={i.discountedPrice}
            />
          ))}
        </div>
      </AppContext>
    </>
  )
}

export default Home
