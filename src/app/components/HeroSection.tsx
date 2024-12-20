import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="w-[1920px] h-[500px] bg-black">
      <div className="flex">
        {/* =================left side================= */}
        <div className="w-[456px] h-[356px] mt-[13px] ml-[200px] flex flex-col">
          <div className="font-Great Vibes font-normal w-[249px] h-[40px] mt-[13px] ml-[200px] text-[32PX] leading-[40px] text-[#FF9F0D]">
            Its Quick & Amusing!
          </div>

          <div className="w-[472px] h-[136px]  ml-[200px] font-bold text-[60px] leading-[68px] text-white">
            <span className="text-[#FF9F0D]">Th</span>e Art of speed
            <br />
            food Quality
          </div>

          <div className="w-[418px] h-[48px] mt-[13px] ml-[200px] font-normal text-base leading-6 text-white ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Varius sed pharetra dictum neque massa congue
          </div>

          {/* ==========button====== */}
          <div className="w-[190px] h-[60px] mt-[13px] ml-[200px]">
            <button className="bg-yellow-500 text-white rounded-[30px] py-2 px-5">
              See Menu
            </button>
          </div>
        </div>

        {/* ===========Right side============= */}
        <div>
          <div className="w-[400px] h-[400px]  ml-[350px] pb-96 ">
            <Image src="/Hero.jpg" alt="image" height={1900} width={900} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
