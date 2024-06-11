import React from "react";
import Heading from "../shared/Heading";
import img1 from "../../assets/blogs/blog-1.jpg"
import img2 from "../../assets/blogs/blog-2.jpg"
import img3 from "../../assets/blogs/blog-3.jpg"

const BlogData=[
    {
        title:"How to choose perfect smartwatch",
        subtitle:"Find your perfect smartwatch by considering features, compatibility, design, and battery life",
        published:"jan 20, 2024",
        image:img1,
        aosDelay:"0"
    },
    {
        title:"How to choose perfect gadget",
        subtitle:"Find your perfect gadet by considering features, compatibility, design, and battery life",
        published:"july 16, 2024",
        image:img2,
         aosDelay:"200"
    },

{
    title:"How to choose perfect VR headset",
    subtitle:"Find your perfect VR headset by considering features, compatibility, design, and battery life",
    published:"dec 02, 2024",
    image:img3,
     aosDelay:"400"
},

]

const Blogs = () => {
    return ( 
        <div className="my-12">
           <div className="container">
            {/* header section */}
            <Heading title="Recent News"
            subtitle={"Explore Our Blogs"}/>
             {/* blog section */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 gap-y-6 sm:gap-4 md:gap-7">
                  {/* blog card   */}
                  {BlogData.map((data)=>(
                    <div data-aos="fade-up"
                    data-aos-delay={data.aosDelay}
                    key={data.title}
                    className="bg-white dark:bg-gray-900">
                        {/* img section */}
                        <div className="mb-2 overflow-hidden rounded-2xl">
                            <img
                            className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                            src={data.image} alt=""/>
                             </div>
                             {/* content section */}
                             <div className="space-y-2">
                                <p className="text-xs text-gray-500">{data.published}</p>
                              <p className="font-bold line-clamp-1">{data.title}</p>
                              <p className="text-sm text-gray-600 line-clamp-2 dark:text-gray-400">{data.published}</p>
                                
                                </div>
                        </div>
                  ))}
                </div>
           
            
            </div>  
        </div>
     );
}
 
export default Blogs;