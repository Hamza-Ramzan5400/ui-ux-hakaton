
import Image from "next/image"
const Cheef = () => {
  return (
    <div className=" w-[1920px] bg-black ">
    <div className=" w-[1764px] h-[675px]  ml-[144px] ">
      <div className=" w-[56px] h-[40px]  ml-[748px] ">
         <p className=" font-normal text-xl leading-10 text-[#FF9F0D]">
         Chefs
         </p>
      </div>
      <div className=" w-[429px] h-[56px]  ml-[651px] ">
      <p className=" font-bold text-4xl leading-10 text-white">
      <span className="text-[#FF9F0D]">Me</span>et Our Chef
         </p>
      </div>
       {/* ====================image============= */}
       <div className="flex">
         <div className="w-[250px] h-[392px] ml-[250px]">
           <Image src="/Chef1.png" alt="pic" width={312} height={392}/>
         </div>

         <div className="w-[250px] h-[392px] ml-[50px]">
           <Image src="/Chef2.png" alt="pic" width={312} height={392}/>
         </div>

         <div className="w-[250px] h-[392px] ml-[50px]">
           <Image src="/Chef3.png" alt="pic" width={312} height={392}/>
         </div>

         <div className="w-[250px] h-[392px] ml-[50px]">
           <Image src="/Chef4.png" alt="pic" width={312} height={392}/>
         </div>
       </div>

       {/* ======================button================== */}
       <div className="w-[155px] h-[50px] ml-[711px] -mt-5 ">
          <button className=" px-5 py-2 text-white font-normal text-base leading-6 border-2 border-[#FF9F0D] rounded-[30px] ">See More</button>
       </div>

    </div>
    </div>
  )
}

export default Cheef