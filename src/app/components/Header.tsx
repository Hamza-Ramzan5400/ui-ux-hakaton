import { Calendar } from "lucide-react";

const Header = () => {
  return (
    <div className="w-[1920px]  h-24 bg-black ">
      <div className="w-[1320px] h-[87px] mt-[45px] ml-[300px] ">
        <div className="w-[109px] h-[32px] ml-[605px] text-[#FAFAFA] font-bold leading-8 text-2xl flex">
          Food <span className="text-[#FF9F0D]">tuck</span>
        </div>

        <div className="flex">
          <ul className="flex items-center gap-5">
            <li className="text-yellow-500  font-normal leading-6 ">Home</li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Menu
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Blog
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Pages
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              About
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Shop
            </li>
            <li className="text-white hover:text-yellow-600 font-normal leading-6 ">
              Contact
            </li>
          </ul>

          <div className="ml-[600px] flex gap-2">
            <input
              className="outline-yellow-700 border-2 bg-black text-white font-normal  border-yellow-700 rounded-2xl px-4"
              type="text"
              placeholder="Search"></input>

            <div className="h-6 w-6 text-white flex">
              <Calendar />
            </div>
          </div>
        </div>
      </div>
      <hr className=" border-1 border-amber-600"/>
    </div>
  );
};

export default Header;
