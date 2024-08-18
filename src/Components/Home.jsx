import React, { useState } from 'react'
import { Banner } from './Banner'
import AppContext from './AppContext'
import { BrandsCategorie } from './BrandsCategorie'
import { Deals } from './Deals'
import { Card } from './Card'
import { NewBrands } from './NewBrands'
import { useNavigate } from 'react-router'

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
    category:'best',
    id:1,
  }, {
    img: "/images/tab.png",
    title: "OPod Pro 12.9 Inch M1 2023,64GB + Wifi, GPS",
    quantity: "(152)",
    actualPrice: "$598.00",
    discountedPrice: '$720.00',
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category:'best',
    id:2,
  }, {
    img: "/images/wifi.png",
    title: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /VGA 8GB",
    quantity: "(8)",
    actualPrice: "$1,259.00",
    discountedPrice: '$2,200.00',
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: false,
    category:'best',
    id:3,
  }, {
    img: "/images/watch.png",
    title: "Opplo Watch Series 8 GPS +Cellular Stainless Steel Case with Milanese Loop",
    quantity: "",
    priceRange: "$959.00 - $1,678.99",
    isFreeShipping: false,
    isFreeGift: false,
    isInStock: false,
    category:'best',
    id:4,
  }, {
    img: "/images/charge.png",
    title: "iSmart 24V Charger",
    quantity: "(9)",
    actualPrice: "$9.00",
    discountedPrice: '$22.00',
    isFreeShipping: false,
    isFreeGift: false,
    isInStock: false,
    category:'best',
    id:5,
  },{
    img: "/images/watch.png",
    title: "Opplo Watch Series 8 GPS +Cellular Stainless Steel Case with Milanese Loop",
    quantity: "",
    priceRange: "$959.00 - $1,678.99",
    isFreeShipping: false,
    isFreeGift: false,
    isInStock: false,
    category:'new',
    id:6,
  },{
    img: "/images/charge.png",
    title: "iSmart 24V Charger",
    quantity: "(9)",
    actualPrice: "$9.00",
    discountedPrice: '$22.00',
    isFreeShipping: false,
    isFreeGift: false,
    isInStock: false,
    category:'new',
    id:7,
  },{
    img: "/images/wifi.png",
    title: "uLosk Mini case 2.0, Xenon i10 / 32GB / SSD 512GB /VGA 8GB",
    quantity: "(8)",
    actualPrice: "$1,259.00",
    discountedPrice: '$2,200.00',
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: false,
    category:'new',
    id:8,
  },{
    img: "/images/tab.png",
    title: "BOSO 2 Wireless On Ear Headphone",
    quantity: "(152)",
    originalPrice: "$359.00",
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category:'popular',
    id:9,
  },{
    img: "/images/heads.png",
    title: "OPod Pro 12.9 Inch M1 2023,64GB + Wifi, GPS",
    quantity: "(152)",
    actualPrice: "$598.00",
    discountedPrice: '$720.00',
    isFreeShipping: true,
    isFreeGift: true,
    isInStock: true,
    category:'popular',
    id:10,
  }
]


const Home = () => {

  const [head, setHade] = useState("best");
  const navigate = useNavigate();

  const filterData = (category) => {
    return cardData.filter((item) => item.category === category);
  };

  const bestData = filterData("best");
  const newData = filterData("new");
  const popularData = filterData("popular");



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
          {(head === "best"
            ? bestData
            : head === "new"
            ? newData
            : popularData
          ).map((i, ind) => (
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
              handleclick={() => navigate(`/product/${i.id}`)}
            />
          ))}
        </div>
      </AppContext>
      <AppContext className='bg-[#fff] mt-4 py-[90px] px-[30px] rounded-xl'>
        <NewBrands />
      </AppContext>



      <AppContext>
      <div className='mt-12 mb-11'>
         
         <h3 className='text-[18px] font-bold mb-5'>Swoo – #1 Online Marketplace for technology</h3>

          <p className='mb-6 text-[14px] text-[#666666] leading-6'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae posuere mi. Quisque iaculis dignissim scelerisque. Morbi condimentum sagittis leo vitae tempor.Suspendisse in dolor odio. Sed aliquet ac lacus ut luctus. Fusce mattis sollicitudin sem, id lobortis nibh ullamcorper a. Donec vehicula dolor et arcu consequat mattis.
            Fusce mattis nec nulla in scelerisque.
            </p>

          <p className='mb-6 text-[14px] text-[#666666] font-normal leading-6'>
            Morbi pharetra sem mauris, nec aliquet ipsum vestibulum suscipit. Curabitur non euismod dui. Proin eget justo eu erat luctus placerat. Nam rhoncus ipsum ac enim faucibus, at consequat
            ante maximus. Vestibulum at nibh ac odio ultrices varius. Duis vitae libero mollis, lobortis ligula id, varius erat. Sed id odio dictum, laoreet enim ac, commodo magna. Praesent sodales porttitor
            maximus. Sed a lacus felis. Maecenas consectetur consequat orci scelerisque malesuada. Fusce vel orci eu tortor consequat mattis quis at ante. Class aptent taciti sociosqu ad litora
            torquent per conubi,
            </p>

            <p className='text-[13px] '>Viwe All</p>
        </div>
      </AppContext>
    </>
  )
}

export default Home
