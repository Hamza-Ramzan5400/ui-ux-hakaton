import { Cookie, CookingPot } from "lucide-react";
import Image from "next/image";
import { PiHamburgerFill } from "react-icons/pi";

const Choose = () => {
  return (
    <div className="w-[1920px] bg-black">
      <div className="w-[1320px] h-[716px] ml-[300px] flex">
        {/* =================left side============ */}

        <div className=" flex flex-col">
          <div className="flex">
            <div className=" w-[162px] h-[356px] ml-[100px] overflow-hidden ">
              <Image src="/pic12.jpeg" alt="pic" width={362} height={356} />
            </div>

            <div className=" w-[181px] h-[231px] ml-[30px] overflow-hidden ">
              <Image src="/pic13.jpeg" alt="pic" width={362} height={356} />
            </div>
          </div>

          <div className="-mt-36 ">
            <div className=" flex ">
              <div className=" w-[162px] h-[356px] ml-[100px] overflow-hidden ">
                <Image src="/pic14.jpeg" alt="pic" width={362} height={356} />
              </div>

              <div className=" w-[121px] h-[226px] ml-[30px] overflow-hidden ">
                <Image src="/pic15.jpeg" alt="pic" width={362} height={356} />
              </div>

              <div className=" flex flex-col ">
                <div className=" w-[121px] h-[226px] ml-[30px] overflow-hidden ">
                  <Image src="/pic16.jpeg" alt="pic" width={362} height={356} />
                </div>

                <div className=" w-[121px] h-[226px] ml-[30px] -mt-32 overflow-hidden ">
                  <Image src="/pic17.jpeg" alt="pic" width={362} height={356} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* =============Right side============= */}
        <div>
          <div className=" w-[175px] h-[40px] ml-[100px] ">
            <p className=" font-normal text-[16px] leading-10 text-[#FF9F0D] ">
              Why Choose us
            </p>
          </div>

          <div className=" w-[433px] h-[112px] ml-[100px] ">
            <p className=" font-bold text-[48px] leading-10 text-white ">
              <span className="text-[#FF9F0D]">Ex</span>ta ordinary taste
              <br />
              And Experienced
            </p>
          </div>

          <div className=" w-[525px] h-[120px] ml-[100px] ">
            <p className=" font-normal text-[16px] leading-6 text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </p>
          </div>

          <div className=" w-[374px] h-[135px] ml-[100px] flex">
            <div className=" w-[102px] h-[100px] ">
              <div className=" w-[56px] h-[56px] bg-yellow-400 flex justify-center items-center">
                <PiHamburgerFill className="text-white text-xl" />
              </div>
              <p className="text-white font-normal text-base">Fast Food</p>
            </div>

            <div className=" w-[102px] h-[100px] ">
              <div className=" w-[56px] h-[56px] bg-yellow-400 flex justify-center items-center">
                <Cookie className="text-white" />
              </div>
              <p className="text-white font-normal text-base">Lunch</p>
            </div>

            <div className=" w-[102px] h-[100px] ">
              <div className=" w-[56px] h-[56px] bg-yellow-400 flex justify-center items-center">
                <CookingPot className="text-white" />
              </div>
              <p className="text-white font-normal text-base">Dinner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
