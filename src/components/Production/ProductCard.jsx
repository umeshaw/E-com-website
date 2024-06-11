import React from "react";
import Button from "../shared/Button";

const ProductCard = ({ data }) => {
    return (
        <div className="mb-10">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4 place-items-center">
                {/* card section */}
                {data.map((item) => (
                    <div data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                     key={item.id} className="relative group">
                        <div 
                        className="relative">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="h-[180px] w-[260px] object-cover rounded-md"
                            />
                            <div className="absolute items-center justify-center hidden w-full h-full text-center duration-200 -translate-x-1/2 -translate-y-1/2 group-hover:flex top-1/2 left-1/2 group-hover:backdrop-blur-sm">
                                <Button 
                                    text="Add to Cart"
                                    bgColor="bg-primary"
                                    textColor="text-white"
                                />
                            </div>
                        </div>
                        <div className="mt-2 leading-7">
                            <h2 className="font-semibold">{item.title}</h2>
                            <h2 className="font-bold">${item.price}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCard;

