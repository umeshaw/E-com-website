import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../shared/Button";

const Popup = ({orderPopup, handleOrderPopup}) => {
    return ( 
        <>
    {
        orderPopup &&(
            <div >
            <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-black/50 backdrop-blur-sm">
                <div className="w-[300px] fixed top-1/2 left-1/2 
                -translate-x-1/2 p-4 shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-xl">

{/* header section */}
<div className="flex items-center justify-between ">
    <h1>Order Now</h1>
    <div>
        <IoCloseOutline 
        onClick={handleOrderPopup}
        className="text-2xl cursor-pointer"/>
    </div>
    
</div>
{/* form section */}
<div className="mt-4">
    <input className="form-input"
    type="text"
    placeholder="Name"/>
    
     <input className="form-input"
    type="email"
    placeholder="Email"/>
    
     <input className="form-input"
    type="text"
    placeholder="Address"/>
    <div className="flex justify-center">
        <Button
        text="Order Now"
        bgColor={"bg-primary"}
        textColor={"text-e=white"}
        />
    </div>
</div>
                    </div>
            </div>
        </div>
        )
    }
    </>
     );
}
 
export default Popup;