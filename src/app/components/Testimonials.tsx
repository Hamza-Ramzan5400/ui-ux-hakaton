
import Image from "next/image"
const Testimonials = () => {
  return (
    <div className=" w-[1920px]   bg-black">
        <div className="w-[1273px] h-[770px]  ml-[300px] ">
        <div className="w-[128px] h-[40px] ml-[4px] ">
            <p className="text-xl font-normal text-[#FF9F0D] leading-10">
            Testimonials
            </p>
            </div>

            <div className="w-[599px] h-[56px] ml-[4px] ">
            <p className="text-4xl font-bold text-white leading-10">
            What our client are saying
            </p>
            </div>
               {/* =====================image================ */}
            <div className=" w-[870px] h-[450px]  ml-[56px] ">
           <Image src="/Testimonials.png" alt="pic" width={870} height={450} />
            </div>

        </div>

    </div>
  )
}

export default Testimonials