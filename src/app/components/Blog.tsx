import Image from "next/image";
import { BiLike } from "react-icons/bi";
import { FaRegMessage } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const Blog = () => {
  return (
    <div className="w-[1920px]  bg-black">
      <div className="w-[1320px] h-[732px]  ml-[300px]">
        <div className="w-[124px] h-[40px]  ml-[550px]">
          <p className=" font-[400px] text-[20px] leading-[40px] text-[#FF9F0D]">
            Blog Post
          </p>
        </div>

        <div className="w-[462px] h-[56px]  ml-[430px] ">
          <p className=" font-[500px] text-[40px] leading-[56px] text-white">
            <span className="text-[#FF9F0D]">La</span>test News & Blog
          </p>
        </div>

        {/* ======================image==================== */}
        {/* ======================image-01==================== */}
        <div className="flex mt-5 ">
          <div className=" w-[424px] h-[569px] ml-[20px] flex ">
            <div className=" w-[250px] h-[300px] ml-[100px] border-2 ">
              <Image
                src="/blog burger.png"
                alt="pic"
                width={250}
                height={300}
              />

              <div className="w-[133px] h-[24px]  ml-[10px] mt-2">
                <p className=" font-[400px] text-[16px] leading-[24px] text-[#FF9F0D]">
                  17 December 2024{" "}
                </p>
              </div>

              <div className="w-[338px] h-[64px]  ml-[10px] -mt-1">
                <p className=" font-[500px] text-[18px] leading-[32px] text-white">
                  Pellentesque Non Efficitur Mi <br/> Aliquam Convallis Mi Quis{" "}
                </p>
              </div>
              {/* =====================last div================= */}
              <div className="flex">
                <div className="w-[86px] h-[24px]  ml-[10px] mt-3">
                  <p className=" font-[400px] text-[16px] leading-[24px] text-white">
                    <a href="##">Learn More</a>
                  </p>
                </div>
                {/* ======================logo=============== */}
                <div className="flex gap-2 items-center ml-[70px] mt-4">
                  <div className="w-[20px] h-[20px] text-white">
                    <BiLike />
                  </div>
                  <div className="w-[20px] h-[20px] text-[#FF9F0D]">
                    <FaRegMessage />
                  </div>
                  <div className="w-[20px] h-[20px] text-white ">
                    <IoShareSocialOutline />
                  </div>
                </div>
              </div>
            </div>

            {/* =======================2nd======================== */}
            <div className=" w-[250px] h-[300px] ml-[100px] border-2  ">
              <Image
                src="/blog pizza.png"
                alt="pic"
                width={250}
                height={300}
              />

              <div className="w-[133px] h-[24px]  ml-[10px] mt-2">
                <p className=" font-[400px] text-[16px] leading-[24px] text-[#FF9F0D]">
                  17 December 2024{" "}
                </p>
              </div>

              <div className="w-[338px] h-[64px]  ml-[10px] -mt-1">
                <p className=" font-[500px] text-[18px] leading-[32px] text-white">
                  Pellentesque Non Efficitur Mi <br/> Aliquam Convallis Mi Quis{" "}
                </p>
              </div>
              {/* =====================last div================= */}
              <div className="flex">
                <div className="w-[86px] h-[24px]  ml-[10px] mt-3">
                  <p className=" font-[400px] text-[16px] leading-[24px] text-white">
                    <a href="##">Learn More</a>
                  </p>
                </div>
                {/* ======================logo=============== */}
                <div className="flex gap-2 items-center ml-[70px] mt-4">
                  <div className="w-[20px] h-[20px] text-white">
                    <BiLike />
                  </div>
                  <div className="w-[20px] h-[20px] text-[#FF9F0D]">
                    <FaRegMessage />
                  </div>
                  <div className="w-[20px] h-[20px] text-white ">
                    <IoShareSocialOutline />
                  </div>
                </div>
              </div>
            </div>
            {/* ==============================3rd====================== */}
            <div></div>
            <div className=" w-[250px] h-[300px] ml-[100px] border-2 flex flex-col ">
              <Image
                src="/blog sharma.png"
                alt="pic"
                width={250}
                height={300}
              />

              <div className="w-[133px] h-[24px]  ml-[10px] mt-2">
                <p className=" font-[400px] text-[16px] leading-[24px] text-[#FF9F0D]">
                  17 December 2024{" "}
                </p>
              </div>

              <div className="w-[338px] h-[64px]  ml-[10px] -mt-1">
                <p className=" font-[500px] text-[18px] leading-[32px] text-white">
                  Pellentesque Non Efficitur Mi <br/> Aliquam Convallis Mi Quis{" "}
                </p>
              </div>
              {/* =====================last div================= */}
              <div className="flex">
                <div className="w-[86px] h-[24px]  ml-[10px] mt-3">
                  <p className=" font-[400px] text-[16px] leading-[24px] text-white">
                    <a href="##">Learn More</a>
                  </p>
                </div>
                {/* ======================logo=============== */}
                <div className="flex gap-2 items-center ml-[70px] mt-4">
                  <div className="w-[20px] h-[20px] text-white">
                    <BiLike />
                  </div>
                  <div className="w-[20px] h-[20px] text-[#FF9F0D]">
                    <FaRegMessage />
                  </div>
                  <div className="w-[20px] h-[20px] text-white ">
                    <IoShareSocialOutline />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
