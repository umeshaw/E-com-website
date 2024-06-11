
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/Hero/Hero';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Category from './components/Category/Category';
import Category2 from './components/Category/Category2';
import Services from './components/Services/Services';
import Banner from './components/Banner/Banner';
import headphone from "../src/assets/hero/headphone.png"
import Production from './components/Production/Production';
import smartwatch2 from './assets/category/smartwatch2-removebg-preview.png'
import Blogs from './components/Blogs/Blogs';
import Partners from './components/Partners/Partners'
import Footer from './components/Footer/Footer'
import Popup from './components/Popup/Popup';
import React from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

const BannerData={
  discount:"30% OFF",
  title:"Fine Smaile",
  dat:"10 Jan to 28 Jan ",
  image:headphone,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  Title4:"bla valanxdjdj",
  bgColor:"#f42c37"
}

const BannerData2={
  discount:"30% OFF",
  title:"Fine Smaile",
  dat:"10 Jan to 28 Jan ",
  image:smartwatch2,
  title2:"Air Solo Bass",
  title3:"Winter Sale",
  Title4:"bla valanxdjdj",
  bgColor:"#2dcc6f"
}


function App() {
const [orderPopup,setOrderpopup]=React.useState(false);
const handleOrderPopup=()=>{
  setOrderpopup(!orderPopup);
};
React.useEffect(()=>{
  AOS.init(
    {
      duration:2000,
      easing:"ease-in-sine",
      delay:100,
      offset:100,
     
    }
  );
  AOS.refresh();
})

  
  return (
    <div className="overflow-hidden duration-200 bg-white dark:bg-gray-900 dark:text-white">
    <Navbar handleOrderPopup={handleOrderPopup}/>
    <Hero handleOrderPopup={handleOrderPopup}/>
    <Category/>
    <Category2/>
    <Services/>
    <Banner data ={BannerData}/>
    <Production/>
    <Banner data ={BannerData2}/>
    <Blogs/>
    <Partners/>
    <Footer/>
    <Popup  orderPopup={orderPopup}
    handleOrderPopup={handleOrderPopup} />
    </div>
  );
}

export default App;
