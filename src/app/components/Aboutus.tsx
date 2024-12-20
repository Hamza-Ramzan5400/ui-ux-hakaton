import { Check } from "lucide-react";
import Image from "next/image";

const Aboutus = () => {
  return (
    <div className="w-[1920px]  bg-black">
      <div className="w-[1320px] h-[562px]  ml-[100px] flex">
        {/* ===================left side============== */}
        <div className="w-[562px] h-[562px]">
          <div className="w-[91px] h-[40px] ml-[300px] ">
            <p className="text-[16px] font-normal text-[#FF9F0D] leading-10">
              About us
            </p>
          </div>

          <div className="w-[446px] h-[110px] mt-[2px] ml-[250px]">
            <p className="font-bold text-5xl line height-[56px] text-white">
              {" "}
              <span className="text-[#FF9F0D]">We</span> Create the best <br />{" "}
              foody product
            </p>
          </div>

          <div className="w-[526px] h-[130px] mt-[2px] ml-[250px]">
            <p className="font-normal text-base line height-[24px] text-white">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
          </div>

          <div className="w-[425px] h-[26px] ml-[250px] mt-[2px]  ">
            <p className="font-normal text-lg line height-[26px] text-white  flex items-center gap-2">
              {" "}
              <Check className="text-white" /> Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
          </div>

          <div className="w-[5360px] h-[26px] ml-[250px] mt-[2px]  ">
            <p className="font-normal text-lg line height-[26px] text-white  flex items-center gap-2">
              {" "}
              <Check className="text-white" /> Quisque diam pellentesque
              bibendum non dui volutpat fringilla{" "}
            </p>
          </div>

          <div className="w-[470px] h-[26px] ml-[250px] mt-[2px]  ">
            <p className="font-normal text-lg line height-[26px] text-white  flex items-center gap-2">
              {" "}
              <Check className="text-white" />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className="w-[190px] h-[60px] ml-[270px] mt-3">
            <button className="bg-yellow-500 text-white rounded-[30px] py-2 px-5">
              See Menu
            </button>
          </div>
        </div>

        {/* ========================Right side================== */}
        <div>
          <div className=" w-[660px] h-[230px] ml-[280px] overflow-hidden ">
            <Image src="/pic4.jpeg" alt="pic" width={760} height={330} />
          </div>

          <div className="flex gap-3">
            <div className="w-[322px] h-[194px] ml-[280px] overflow-hidden  mt-3">
              <Image src="/pic6.jpeg" alt="pic" width={322} height={194} />
            </div>

            <div className="w-[322px] h-[194px] ml-[3px] mt-3 overflow-hidden ">
              <Image src="/pic7.jpeg" alt="pic" width={322} height={194} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
