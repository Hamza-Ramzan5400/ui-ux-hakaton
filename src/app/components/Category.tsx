import Image from "next/image"

const Category = () => {
  return (
    <div className="w-[1920px] bg-black">

       <div className= " w-[1792.31px] h-[503px] ml-[300px] ">

          <div className=" w-[177px] h-[40px] ml-[571px]" >
           <p className=" font-normal text-[20px] leading-10 text-[#FF9F0D]">
           Food Category
           </p>
          </div>

          <div className=" w-[446px] h-[56px] ml-[430px]  " >
           <p className=" font-bold text-[48px]   text-white">
           <span className=" font-bold text-[48px] text-[#FF9F0D]" >Ch</span>oose Food Iteam
           </p>
          </div>

              <div className=" w-[1320px] h-[329px] ml-[10px]  flex items-center justify-evenly " >

                <div className=" w-[205px] h-[205px]  mt-8 bg-slate-200 overflow-hidden ">
                <Image src="/pic8.jpeg" alt="pic" width={205} height={205} />    
                </div>  

                <div className=" w-[205px] h-[205px]  mt-10 bg-slate-200  ">
                <Image src="/pic9.jpeg" alt="pic" width={205} height={205} />    
                </div>

                <div className=" w-[205px] h-[205px]  mt-10 bg-slate-200 overflow-hidden ">
                <Image src="/pic10.jpeg" alt="pic" width={205} height={205} />    
                </div>

                <div className=" w-[205px] h-[205px]  mt-10 bg-slate-200  ">
                <Image src="/pic11.jpeg" alt="pic" width={500} height={500}  />    
                </div>

              </div>

       </div>

    </div>
  )
}

export default Category