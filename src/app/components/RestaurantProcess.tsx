
import { Play } from 'lucide-react';
import Image from 'next/image';

const RestaurantProcess = () => {
  return (
    <div className=" flex items-center justify-between bg-black text-white p-8 w-[1920px]">
      <div className="w-[1918px]  relative h-[558px] ">
        <Image
          src="/Blog.png" 
          alt="Delicious food"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-1/2 pl-8 absolute ml-[915px]">
        <h2 className="text-yellow-500 text-lg ">Restaurant Active Process</h2>
        <h1 className="text-4xl font-bold my-4">We Document Every Food Bean Process until it is saved</h1>
        <p className="text-gray-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna,
        </p>
        <div className=" w-[369px] h-[60px]  flex space-x-4 items-center">
          <button className=" w-[120px] h-[50px] border-2 border-amber-600  text-white px-1 py-2 rounded-full">Read More</button>
          <button className=" text-white flex gap-2 items-center  "><Play className='w-[60px] h-[60px] bg-[#ff9f0d] text-white px-4 py-2 rounded-full '  />play video</button>
          
        </div>
      </div>
    </div>
  );
};

export default RestaurantProcess;

