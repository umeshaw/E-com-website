import React from "react";
import Image1 from "../../assets/category/earphone.png"
import Image2 from "../../assets/category/macbook.png"
import Image3 from "../../assets/category/watch.png"
import Button from "../shared/Button";
const Category = () => {
    return ( 
<div className="py-8">
    <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* first col */}
            <div className="py-10 pl-5 text-white bg-gradient-to-br from-black/90 to-black/70 rounded-3xl relative h-[320px
            flex items-end]">
                <div>
                    <div className="mb-4 ">
                      <p className="mb-[2px] text-gray-400 mr-8">Enjoy</p>
                      <p className="text-2xl font-semibold mb-[2px] mr-8">With</p>
                      <p className="pb-3 mb-2 text-4xl font-bold xl:text-5xl opacity-20">Earphone</p>
                      <Button 
                      text="Browse"
                      bgColor={"bg-primary"}
                      textColor={"text-white"}
                      />
                    </div>
                </div>
                <img src={Image1} alt=""
                className="w-[310px] absolute bottom-0 "/> 
            </div>
            {/* second col  */}
            <div className="  py-10 pl-5 text-white bg-gradient-to-br from-brandYellow/90 to-brandYellow/90 rounded-3xl relative h-[320px
           ] flex items-end">
                <div>
                    <div className="mb-4 pr-7">
                      <p className="mb-[2px] text-gray-400">Enjoy</p>
                      <p className="text-2xl font-semibold mb-[2px]">With</p>
                      <p className="pb-3 mb-2 text-4xl font-bold xl:text-5xl opacity-20">Gadget</p>
                      <Button 
                      text="Browse"
                      bgColor={"bg-white"}
                      textColor={"text-brandYellow"}
                      />
                    </div>
                </div>
                <img src={Image3} alt=""
                className="w-[320px] absolute -right-4 lg:top-[40px]"/> 
            </div>
            {/* third col */}
           
                 <div className="col-span-2 py-10 pl-5 text-white bg-gradient-to-br from-primary/90 to-primary/90 rounded-3xl  relative h-[320px
            flex items-end]">
                <div>
                    <div className="mb-4">
                      <p className=  "text-white mb-[2px] ">Enjoy</p>
                      <p className="text-2xl font-semibold mb-[2px] ">With</p>
                      <p className="pb-3 text-4xl font-bold xl:text-5xl opacity-40">Laptop</p>
                      <Button 
                      text="Browse"
                      bgColor={"bg-white"}
                      textColor={"text-primary"}
                      />
                    </div>
                </div>
                <img src={Image2} alt=""
                className="w-[250px] absolute top-1/2 -translate-y-1/2 -right-0"/> 
            </div>
        </div>
    </div>
</div>
        
     );
}
 
export default Category;