import React from 'react'

export const BrandsCategorie = ({title,data}) => {
  return (
    <>
     <div className='bg-white p-[30px] max-w-[665px] mb-[16px] rounded-xl '>
        <div className={`flex items-center ${ title =="top categories"? "gap-[30px]": "justify-between"}`}>
            <p className='text-[18px] font-bold uppercase'>{title}</p>
            <a className='text-[13px] text-[#66666666] underline capitalize' href="#">viwe all</a>
        </div>
        <div className={`flex flex-wrap mt-[40px] ${title =='featured brands'?'gap-[40px]':'gap-[30px]'}`}>
           {
            data.map((item,ind)=>{
                return(
                  <div className='flex flex-col items-center gap-[10px]' key={ind}>
                      <img  src={item.image} alt=""/>
                      {
                        item.title && <p className='capitalize font-semibold text-[14px]'>{item.title}</p>
                      }
                  </div>
                )

            })
           }
        </div>
     </div>
    </>
  )
}
