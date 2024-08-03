export const FooterLink = ({ title, data }) => {
  return (
    <>
      <div className="flex flex-col gap-[10px]">
        <p className="text-[18px] font-bold whitespace-nowrap mb-[20px]">{title}</p>
        {
          data.map((item, index) => {
            return <a href={item.link} key={index} className="text-[#666666]">{item.title}</a>
          })
        }

      </div>
    </>
  )
}
