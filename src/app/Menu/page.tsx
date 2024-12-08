

import { Calendar, Search, UserRound } from "lucide-react"



const Menu = () => {
  return (
    <div>
        <div className="w-[1920px] h-[90px] bg-black flex items-center">
        <div className="w-[1320px] h-[32] mt-[9px] ml-[300px] flex items-center ">
        <div>
        <h1 className="w-[109px] h-[32px] font-Helvetica text-2xl font-bold leading-8 text-white flex">
        Food <span className="font-Helvetica text-2xl font-bold leading-8 text-yellow-600">tuck</span>
        </h1>  
        </div>
       <div className="w-[508px] h-[24px] ml-[100px] mt-[4px]">
       <ul className="flex items-center gap-5">
            <li className="text-yellow-500  font-normal leading-6 ">Home</li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">Menu</li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">Blog</li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">Pages</li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">Shop</li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">Contact</li>
         </ul>
       </div>
        
        <div className="flex  items-center mt-[4px] ml-[1296] gap-5">
        <div className="w-6 h-6 ">
        <Search className="text-white" />
        </div>

        <div className="w-6 h-6  ">
           <UserRound className="text-white"/>
        </div>

        <div className="w-6 h-6  ">
            <Calendar className="text-white"/>
        </div>
        </div>

        </div>
        </div>
    </div>
  )
}

export default Menu






// import Image from "next/image"

// const HeroSection = () => {
//   return (
//     <div>

//     <div className="w-[1920px] h-[410px] relative">
    
//           <div className="w-[225px] h-[56px] mt-[198px] ml-[850px] text-[#FAFAFA] bg-red-600 flex items-center">
//           Our Menu
//           </div>
        
//         <Image src="/hero.jpeg" alt="hero image" fill={true}
//         objectFit="cover" 
//         />
//     </div>

// </div>
//   )
// }

// export default HeroSection