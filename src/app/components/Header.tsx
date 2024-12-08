import { Calendar } from "lucide-react";
import Image from "next/image";
const Header = () => {
  return (
    
    <div className="w-[1920px] h-[950px] bg-black ">
      <div className="w-[1320px] h-[87px] mt-[45px] ml-[300px] ">
        <div className="w-[109px] h-[32px] ml-[605px] text-[#FAFAFA] font-bold leading-8 text-2xl flex">
          Food <span className="text-[#FF9F0D]">tuck</span>
        </div>

        <div className="flex">
          <ul className="flex items-center gap-5">
            <li className="text-yellow-500  font-normal leading-6 ">Home</li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Menu
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Blog
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Pages
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              About
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Shop
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Contact
            </li>
          </ul>

          <div className="ml-[600px] flex gap-2">
            <input
              className="outline-yellow-700 border-2 bg-black text-white font-normal  border-yellow-700 rounded-2xl px-4"
              type="text"
              placeholder="Search">
            </input>

            <div className="h-6 w-6 text-white flex" >
               <Calendar />
            </div>
          </div>
        </div>
      </div>
      {/* ===============down navbar========== */}

      <div className="w-[456px] h-[356px] mt-[13px] ml-[200px] flex flex-col">
       <div className="font-Great Vibes font-normal w-[249px] h-[40px] mt-[13px] ml-[200px] text-[32PX] leading-[40px] text-[#FF9F0D]">
       Its Quick & Amusing!
       </div>

        <div className="w-[472px] h-[136px]  ml-[200px] font-bold text-[60px] leading-[68px] text-white">
        <span className="text-[#FF9F0D]">Th</span>e Art of speed 
        <br/>
        food Quality
        </div>

        <div className="w-[418px] h-[48px] mt-[13px] ml-[200px] font-normal text-base leading-6 text-white ">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        <br/>
        Varius sed pharetra dictum neque massa congue
        </div>

        {/* ==========button====== */}
        <div className="w-[190px] h-[60px] mt-[13px] ml-[200px]">
         <button className="bg-yellow-500 text-white rounded-[30px] py-2 px-5">See Menu</button>
        </div>
      </div>
 
        {/* ===========left side============= */}
        <div className="w-[400px] h-[400px]  ml-[1000px] pb-96 ">
             <Image src="/Hero.jpg" alt="image" height={1900} width={900}/>
        </div>
        
        <hr className="bg-orange-500 w-[1920px] h-[2px]"/>

    </div>
        
  
  );
};

export default Header;
