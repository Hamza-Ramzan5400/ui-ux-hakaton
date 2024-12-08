
import { Facebook, Instagram, RotateCw, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <div>
    <div className="bg-black w-[1920px] h-[500px] flex items-center ">
      <div className="w-[312px] h-[95px] ml-[300px] mt-[13]">
        <p className="font-bold text-[24px] leading-[32px] text-[#FFFFFF]">
          About Us
        </p>
        <p className="font-normal text-base text-[#FFFFFF]">
          orporate clients and leisure travelers has
          <br />
          been relying on Groundlink for dependab
          <br />
          safe, and professional chauffeured car
          <br />
          service in major cities across World.
        </p>
        <div>
          <div className="w-[100px] h-[100px] text-white mt-2 ">
            <RotateCw className="bg-[#FF9F0D]" />
          </div>
        </div>
      </div>

      <div className="w-[143px] h-[367px] ml-[74px] mt-[260px] flex flex-col items-center">
        <p className="font-bold text-[24px] leading-[32px] text-white">
          Useful Links
        </p>
        <div className="w-[87px] h-[311px] mt-3 ml-[20px] flex flex-col">
          <ul className="w-[87px] h-[311px] mt-3  flex flex-col">
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              About
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              News
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Partners
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Team
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Menu
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Contacts
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[143px] h-[367px] ml-[74px] mt-[260px] flex flex-col items-center ">
        <p className="font-bold text-[24px] leading-[32px] text-white">Help?</p>
        <div className="w-[87px] h-[311px] mt-3 ml-[20px] flex flex-col ">
          <ul className="w-[87px] h-[311px] mt-3  flex flex-col ">
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              FAQ
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Term & conditions
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Reporting
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Documentation
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Support Policy
            </li>
            <li className=" text-white font-normal text-[20px] leading-[28px]">
              Privacy
            </li>
          </ul>
        </div>
      </div>

      <div className="w-[143px] h-[367px] ml-[74px] mt-[260px] flex flex-col items-center ">
        <p className="font-bold text-[24px] leading-[32px] text-white">
          Recent Post
        </p>
        <div className="w-[244px] h-[53px] ml-[100px] ">
          <div className="w-[59px] h-[48px] pt-8 flex items-center flex-col">
            <Image src="/pic1.jpeg" alt="pic" width={59} height={48} />
          </div>
          <div className="w-[188px] h-[53px] flex flex-col ">
            <div className="w-[96px] h-[24px] ml-[75px]">
              <p className="font-normal text-base leading-6 text-white"> 20 Feb 2022</p>
            </div>
            <div className="w-[168px] h-[6px] mt-[3px] ml-[75px]">
            <p className="font-normal text-lg leading-6 text-white"> Keep Your Business </p>
            </div>
          </div>
        </div>

        <div className="w-[244px] h-[53px] ml-[100px] pt-10">
          <div className="w-[59px] h-[48px] pt-8 flex items-center flex-col">
            <Image src="/pic2.jpeg" alt="pic" width={59} height={48} />
          </div>
          <div className="w-[188px] h-[53px] flex flex-col ">
            <div className="w-[96px] h-[24px] ml-[75px]">
              <p className="font-normal text-base leading-6 text-white"> 20 Feb 2022</p>
            </div>
            <div className="w-[168px] h-[6px] mt-[3px] ml-[75px]">
            <p className="font-normal text-lg leading-6 text-white"> Keep Your Business </p>
            </div>
          </div>
        </div>



        <div className="w-[244px] h-[53px] ml-[100px] pt-20">
          <div className="w-[59px] h-[48px] pt-10 flex items-center flex-col">
            <Image src="/pic3.jpeg" alt="pic" width={59} height={48} />
          </div>
          <div className="w-[188px] h-[53px] flex flex-col ">
            <div className="w-[96px] h-[24px] ml-[75px]">
              <p className="font-normal text-base leading-6 text-white"> 20 Feb 2022</p>
            </div>
            <div className="w-[168px] h-[6px] mt-[3px] ml-[75px]">
            <p className="font-normal text-lg leading-6 text-white"> Keep Your Business </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="w-[1920px] h-[99px] bg-[#4F4F4F] flex items-center">
     <div className="w-[384px] h-[24px] ml-[300px] ">
          <p className="font-bold text-base leading-6 text-white">Copyright © 2024 by <span className="text-[#ff9f0d] font-bold">Ha</span>mza. All Rights Reserved. <span className="text-bold text-3xl text-[#ff9f0d]">Roll.NO: 496839</span></p>
     </div>

     <div className="w-[240px] h-[34px] ml-[700px] gap-5 flex">
      <div className="w-[10px] h-[18px] "><Facebook  className="text-[#FF9F0D] font-bold"/></div>
      <div className="w-[16px] h-[18px] "><Twitter   className="text-[#FF9F0D] font-bold"/></div>
      <div className="w-[14px] h-[18px] "><Instagram className="text-[#FF9F0D] font-bold"/></div>
      <div className="w-[18px] h-[18px] "><Youtube   className="text-[#FF9F0D] font-bold"/></div>
      
    </div>

    </div>

   
    </div>
  );
};

export default Footer;