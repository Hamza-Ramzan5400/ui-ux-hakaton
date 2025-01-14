import { Calendar, Search, UserRound } from "lucide-react";
import Link from "next/link";

const FoodtuckNavbar = () => {
  return (
    <div className="max-w-full h-[90px] mx-auto ">
      {/* ====================main navbar================= */}
      <div className="max-w-full mx-auto h-[90px] bg-black flex items-center">
        {/* ========================Down navbar=================== */}
        <div className="max-w-full mx-auto h-[32] mt-[9px] ml-[300px] flex items-center ">
          <div>
            <h1 className="max-w-full mx-auto h-[32px] font-Helvetica text-2xl font-bold leading-8 text-white flex">
              Food{" "}
              <span className="font-Helvetica text-2xl font-bold leading-8 text-yellow-600">
                tuck
              </span>
            </h1>
          </div>
          <div className="w-[508px] max-auto h-[24px] ml-[100px] mt-[4px]">
            <ul className="flex items-center gap-5">
              <li className="text-yellow-500  font-normal leading-6 ">
                <Link href="/">Home</Link>
              </li>
              <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
               <Link href="/Menu"></Link>
              </li>
              <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
                Blog
              </li>
              <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
                Pages
              </li>
              <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
                Shop
              </li>
              <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
                Contact
              </li>
            </ul>
          </div>
          {/* =========================== icon =========================== */}
          <div className="flex  items-center mt-[4px] ml-[1296] gap-5">
            <div className="w-6 h-6 ">
              <Search className="text-white" />
            </div>

            <div className="w-6 h-6  ">
              <UserRound className="text-white" />
            </div>

            <div className="w-6 h-6  ">
              <Calendar className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodtuckNavbar;
