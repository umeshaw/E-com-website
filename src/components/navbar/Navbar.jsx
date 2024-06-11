import React from "react";
import { FaCartShopping } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";
import DarkMode from "./DarkMode";
import { FaCaretDown } from "react-icons/fa6";


const MenuLinks = [
    { id: 1, name: "Home", link: "/#" },
    { id: 2, name: "Shop", link: "/#shop" },
    { id: 3, name: "About", link: "/#about" },
    { id: 4, name: "Blogs", link: "/#blog" },
];
const DropdownList=[
    {id:1, name:'Trending Products',link:'/#'},
    {id:2, name:'Best Selling',link:'/#'},
    {id:3, name:'Top Rated',link:'/#'}
]

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className="relative z-40 duration-200 bg-white dark:bg-gray-900 dark:text-white">
            <div className="py-4">
                <div className="container flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <a href="#" className="text-2xl font-semibold tracking-widest uppercase text-primary sm:text-3xl">
                            Eshop
                        </a>
                        {/* Menu items */}
                        <div className="hidden lg:block">
                            <ul className="flex items-center gap-4">
                                {MenuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className="inline-block px-4 font-semibold text-gray-500 duration-200 hover:text-black dark:hover:text-white">
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                                {/* dropdown */}
                                <li className="relative cursor pointer group"> 
                                    <a href="#" className=" flex iteam-center fap-[2px] font-semibold text-gray-500
                                    dark:hover:text-white py-2">
                                Quick Links
                                <span>
                                    <FaCaretDown className="duration-300 group-hover:rotate-180"/>
                                </span>
                                    </a>
                                    {/* dropdpwnlinks */}
                                    <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white
                                    shadow-md ">
                                        <ul className="space-y-2">
                                            {DropdownList.map((data,index)=>(
                                                <li>
                                                 <a
                                                 className="inline-block w-full font-semibold text-gray-500 duration-200 rounded-md dark:hover:text-white hover:bg-primary/20"
                                                 href={data.link}
                                                 >
                                                {data.name}
                                                 </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Search section */}
                    <div className="relative hidden group sm:block">
                        <IoMdSearch className="absolute text-xl text-gray-600 transform -translate-y-1/2 dark:text-gray-400 top-1/2 right-3"/>
                        <input type="text" placeholder="Search" className="search-bar" />
                    </div>
                    {/* Order list */}
                    <button className="relative p-3"
                    onClick={handleOrderPopup}>
                        <FaCartShopping className="text-xl text-gray-600 dark:text-gray-400"/>
                        <div className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs text-white bg-red-500 rounded-full">4</div>
                    </button>
                    {/* Dark mode section */}
                    <div>
                        <DarkMode />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
