import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaLocationArrow } from "react-icons/fa6";

const FooterLinks=[
    {
        title:"Home",
        link:"/ #"  
    },
    {
        title:"About",
        link:"/#About"  
    },
    {
        title:"Contact",
        link:"/#contact"  
    },
    {
        title:"Blog",
        link:"/#blog"  
    },
]

const Footer = () => {
    return (  

      <div className="drak:bg-gray-950">
        <div className="container">
            <div className="grid pt-5 pb-20 md:grid-cols-3">
                {/* company detail */}
                <div className="px-4 py-8">
<a 
href="#"
className="text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl">
Eshop
    
</a>
<p className="pt-3 text-gray-600 lg:pr-24 dark:text-white/70">We provide you with state-of-the-art, integrated
 e-business solutions and services that enable you to enhance complex processes in the simplest and most effective way, thus building more value on your business assets and with your customers</p>
<p className="mt-4 text-gray-500">Made with LOVE by the coding Journey</p>
                </div>
    <div className="grid grid-cols-2 col-span-2 sm:grid-cols-3 md:pl-10">
        <div className="px-4 py-8">
            <h1  className="mb-3 text-xl font-bold sm:text-left">Important Links</h1>
            <ul className="pt-3 space-y-4">
                {
                    FooterLinks.map(
                        (data,index)=>(
                            <li key={index}>
                                <a
                                href={data.link}
                                className="text-gray-600 duration-300 hover:text-black hover:dark:text-white"
                                >
                                    {data.title}
                                </a>
                            </li>
                        )
                    )
                }
            </ul>
            
        </div>
        {/* secong links */}
        <div className="px-4 py-8">
        <h1 className="mb-3 text-xl font-bold sm:text-left">Quick Links</h1>
            <ul className="pt-3 space-y-4">
                {
                    FooterLinks.map(
                        (data,index)=>(
                            <li key={index}>
                                <a
                                href={data.link}
                                className="text-gray-600 duration-300 hover:text-black hover:dark:text-white"
                                >
                                    {data.title}
                                </a>
                            </li>
                        )
                    )
                }
            </ul>
            
        </div>
        {/* company addres */}
        <div className="col-span-2 px-4 py-8 sm:col-auto">
            <h1 className="mb-3 text-xl font-bold sm:text-left">Address</h1>
        <div>
            <div className="flex items-center gap-3">
                <FaLocationArrow></FaLocationArrow>
                <p>Rathnapura, Sabaragamuwa</p>
            </div>
            <div className="flex items-center gap-3 mt-6">

              <FaMobileAlt></FaMobileAlt>  
               
            <p>+94 77 5562849</p>
            
            </div>
          {/* social links */}
          <div className="flex items-center gap-3 mt-6">
          <a href="#">
                <FaInstagram className="text-3xl duration-200 hover:text-primary"/>
            </a>
          <a href="#">
                <FaFacebook className="text-3xl duration-200 hover:text-primary"/>
            </a>
            <a href="#">
                <FaLinkedinIn className="text-3xl duration-200 hover:text-primary"/>
            </a>
          </div>
            </div>    
        </div>
    </div>
      </div>
        </div>
      </div>  
    );
}
 
export default Footer;