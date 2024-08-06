import { data } from "autoprefixer"

const brandsData = [
    {
        img: '/images/brands.png',
        title: 'Zumac Steel Computer Case',
        desp: 'And an option to upgrade every three years',
    }, {
        img: '/images/brands_2.png',
        title: 'Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.',
        desp: 'Limited time offer. Hurry up',
    }, {
        img: '/images/brands_3.png',
        title: 'Summer Sale with Sale up to 50% OFF for Foam Gaming Chair.',
        desp: 'Limited time offer. Hurry up',
    }, {
        img: '/images/brands_4.png',
        title: 'iPed Pro Mini 6 - Powerful l in hand',
        desp: 'From $19.99/month for 36 months. $280.35 final payment due in month 37',
    }
]




export const NewBrands = () => {
    return (
        <div>
            <div className="flex items-center gap-4">
                {
                    brandsData.map((item, ind) => (
                        <div className="flex flex-col gap-3 max-w-[302px] max-h-[230px]">
                            <img src={item.img} alt="" className="rounded-md" />
                            <p className="text-[16px] font-bold">{item.title}</p>
                            <p className="text-[#666] text-xs">{item.desp}</p>
                            <p className="text-[#1ABA1A] uppercase bg-white rounded-xl px-[30px] py-[10px]">shop now</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
