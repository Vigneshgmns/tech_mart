import { FooterLink } from "./FooterLink"

const selectIcons=[
  {
    id:0,
    image:'/icons/twitter.svg'
  }, {
      id:1,
      image:'/icons/instagram.svg'
    },{
      id:2,
      image:'/icons/facebook.svg'
    },{
      id:3,
      image:'/icons/youtube.svg'
    },{
      id:4,
      image:'/icons/pinterest.svg'
    }
]

const selectImage=[
  {
    id:0,
    image:"/images/pay.png"
  },{
      id:1,
      image:'/images/dd.png'
  },{
      id:2,
      image:'/images/visa.png'
  },{
      id:3,
      image:'/images/strip.png'
  },{
      id:4,
      image:'/images/klar.png'
  }
]

const categoryData=[
  {
    id:0,
    link:'#',
    title:'Laptops'
  }, {
    id:1,
    link:'#',
    title:'PC & Computers'
  }, {
    id:2,
    link:'#',
    title:'Cell Phones'
  }, {
    id:3,
    link:'#',
    title:'Cell Phones'
  }, {
    id:4,
    link:'#',
    title:'Tablets'
  },{
    id:5,
    link:'#',
    title:'Gaming & VR'
  }, {
    id:6,
    link:'#',
    title:'networks'
  },{
    id:7,
    link:'#',
    title:'Cameras'
  },{
    id:8,
    link:'#',
    title:'Sounds'
  },{
    id:9,
    link:'#',
    title:'Office'
  }]

const companyData=[
  {
      id:1,
      link:'#',
      title:'About Swoo'
    }, {
      id:2,
      link:'#',
      title:'Contact'
    }, {
      id:3,
      link:'#',
      title:'Career'
    }, {
      id:4,
      link:'#',
      title:'Blog'
    },{
      id:5,
      link:'#',
      title:'Sitemap'
    }, {
      id:6,
      link:'#',

      title:'Store Locations'
    }]

const helpCenterData=[
      {
        id:0,
        link:'#',
        title:'Customer Service'
      }, {
        id:1,
        link:'#',
        title:'Policy'
      }, {
        id:2,
        link:'#',
        title:'Terms & Conditions'
      }, {
        id:3,
        link:'#',
        title:'Trach Order'
      }, {
        id:4,
        link:'#',
        title:'FAQs'
      },{
        id:5,
        link:'#',
        title:'My Account'
      }, {
        id:6,
        link:'#',
        title:'Product Support'
      }]

const partnerData=[
        {
          id:0,
          link:'#',
          title:'Become Seller'
        }, {
          id:1,
          link:'#',
          title:'Affiliate'
        }, {
          id:2,
          link:'#',
          title:'Advertise'
        }, {
          id:3,
          link:'#',
          title:'Partnership'
        }]      

export const Footer = () => {
  return (
  <>
    <div className="px-[200px] flex gap-[100px] py-[80px]">
      <div>
        <p className="text-[18px] font-bold">Swoo - 1st NYC tech online market</p>
        <div>
          <p className="text-[14px] capitalize mt-[30px]">hotline 24/7</p>
          <p className="text-[#1ABA1A] text-[30px] font-bold">(91) 9876543210 </p>
          <p className="text-[14px] capitalize mt-[30px]">257 Thatcher Road St, Brooklyn, Manhattan,
          NY 10092</p>
          <p className="text-[14px] capitalize mt-2">contact@Swootechmart.com</p>
          <div className="flex gap-[15px] mt-[40px]">
            {
              selectIcons.map((item,index)=>{
                return <div className="bg-[#EBEEF6] rounded-3xl h-[35px] w-[35px] flex justify-center items-center" key={index}>
                  <img src={item.image} alt="" />
                </div>
              })
            }
          </div>
          <div className='text-[14px] flex gap-[10px] mt-[150px] ml-4'>
                <select>
                    <option>USD</option>
                </select>|
                <select>
                    <option>Eng</option>
                </select>
            </div>
        </div>  
      </div>
      <div>
      <div className="flex  gap-[80px]">
            <FooterLink title={"Top Categories"} data={categoryData}/>
            <FooterLink  title={"Company"} data={companyData}/>
            <FooterLink  title={"Help Center"} data={helpCenterData}/>
            <FooterLink  title={"Partner"} data={partnerData}/>
      </div>
      <div className="mt-[60px]">
            <p className="flex gap-[10px] text-[18px] font-bold capitalize">subscribe & get <p className="text-[red] capitalize font-bold">10% off</p> for your first order</p>
            <div className="flex px-[20px] py-[5px] border-b border-[#CCCCCC] justify-between mt-[30px]">
              <input type="email" placeholder="Enter your email address" className="max-w-[250px]"/>
              <button className="text-[#1ABA1A]">Subscribe</button>
            </div>
            <p className="mt-3 text-[#666666] text-[13px]">By subscribing, you’re accepted the our <a href="#" className=" underline font-bold text-[black] ">Policy</a></p>
      </div>
      </div>
    </div>

    <div className="px-[200px] border-t border-[#EBEEF6] py-[30px]">
        <div className="flex gap-4 items-center  justify-between">
        <p className="text-[#666666] text-[14px] mt-[30px] flex gap-1">© 2024 <p className="font-bold text-[black]">Shawonetc3</p>.All Rights Reserved</p>
        <div className="flex gap-[20px] mt-[30px]">
           {
            selectImage.map((item,index)=>{
              return <img src={item.image} alt="" key={index} height={25}/>
            })
           }
        </div>
        <p className="mt-[30px] text-[14px] font-bold text-[blue] underline"><a href="#">Mobile Site</a></p>
        </div>
    </div>
    
  </>
  )
}
