
export const Card = ({
    img,
    title,
    quantity,
    originalPrice,
    actualPrice,
    discountedPrice,
    priceRange,
    isFreeShipping,
    isFreeGift,
    isInStock,
}) => {
    return (
        <>
        <div className="max-w-[250px] flex flex-col gap-[10px]">
            <img src={img} alt="" />
            {quantity && <p className="m-0">{quantity}</p>}
            <p className="m-0 font-bold">{title}</p>
            {originalPrice && <p className="m-0">{originalPrice}</p>}
            {actualPrice && discountedPrice && (
                <div className="flex gap-[10px]">
                    <p className="m-0 text-[#F1352B]">{discountedPrice}</p>
                    <p className="m-0 line-through">{actualPrice}</p>
                </div>
            )}
            {priceRange && <p className="m-0">{priceRange}</p>}
            <div className="flex gap-[10px]">
                {isFreeShipping ? (
                    <div className="text-[#1ABA1A] text-[12px] py-[6px] px-[10px] bg-green-100 rounded-md">
                        Free Shipping
                    </div>
                ) : (
                    <div className="bg-slate-100 p-2 rounded-md">$25.99 Shipping</div>
                )}
                {isFreeGift && (
                    <div className="text-[#F1352B] text-[12px] py-[6px] px-[10px] bg-red-100 rounded-md">
                        Free Gift
                    </div>
                )}
            </div>
            {isInStock ? (
                <div className="flex gap-[5px]">
                    <img src="/icons/instack.svg" alt="" />
                    <p className="m-0">In stock</p>
                </div>
            ) : (
                <div className="flex gap-[5px]">
                    <img src="/icons/outof.svg" alt="" />
                    <p className="m-0">Out of stock</p>
                </div>
            )}
        </div>
        
        </>
        
    );
};
