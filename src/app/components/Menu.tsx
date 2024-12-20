
import Image from "next/image"
const Menu = () => {
  return (
    <div className="w-[1920px] bg-black">
<div className="w-[1320px] h-[656px] ml-[300px]">
<div className="w-[140px] h-[40px] ml-[547px] ">
<p className="font-normal text-lg leading-10 text-[#FF9F0D]">
Choose & pick
</p>
</div>
<div className="w-[358px] h-[56px] ml-[480px]">
<p className="font-bold text-4xl leading-10 text-white">
<span className="text-[#FF9F0D]">Fr</span>om Our Menu
</p>
</div>
<div className="w-[1056px] h-[28px] ml-[150px] mt-4">
<ul className="flex gap-20 ">
    <li className="text-yellow-500  font-[700px] text-xl leading-7 "><a href="##">Breakfast</a></li>
    <li className="text-white hover:text-yellow-500 font-[700px] text-xl leading-7 "><a href="##">Lunch</a></li>
    <li className="text-white hover:text-yellow-500 font-[700px] text-xl leading-7 "><a href="##">Dinner</a></li>
    <li className="text-white hover:text-yellow-500 font-[700px] text-xl leading-7 "><a href="##">Dessert</a></li>
    <li className="text-white hover:text-yellow-500 font-[700px] text-xl leading-7 "><a href="##">Drink</a></li>
    <li className="text-white hover:text-yellow-500 font-[700px] text-xl leading-7 "><a href="##">Snack</a></li>
    <li className="text-white hover:text-yellow-500 font-[700px] text-xl leading-7 "><a href="##">Soups</a></li>
</ul>
</div>
<div className="flex">
    {/* ================left side============== */}
    <div className="w-[315px] h-[306px] ml-[100px]">
  <Image src="/leaf.png"  alt="pic" width={366} height={406}/>

    </div>
    <div className="w-[366px] h-[362px] -ml-[375px] mt-24">
    <Image src="/plate.png"  alt="pic" width={366} height={406}/>
    </div>
    {/* ===================Right side=============== */}
    <div className="flex">

      <div className=" flex flex-col">
      <div className=" w-[376px] h-[79px] ml-[836] mt-20">
  <Image src="/Lettuce Leaf.png" alt="pic" width={376} height={79}/>
      </div>

      <div className=" w-[376px] h-[79px] ml-[836] mt-5">
  <Image src="/Butter.png" alt="pic" width={376} height={79}/>
      </div>

      <div className=" w-[376px] h-[79px] ml-[836] mt-5">
  <Image src="/Bread.png" alt="pic" width={376} height={79}/>
      </div>

      <div className=" w-[376px] h-[79px] ml-[836] mt-5">
  <Image src="/Breakfast.png" alt="pic" width={376} height={79}/>
      </div>
      </div>

{/* ===============right============= */}
      <div>
      <div className=" w-[376px] h-[79px] ml-[70px] mt-20">
  <Image src="/Glow.png" alt="pic" width={376} height={79}/>
      </div>


      <div className=" w-[376px] h-[79px] ml-[70px] mt-5">
  <Image src="/Italian.png" alt="pic" width={376} height={79}/>
      </div>

      <div className=" w-[376px] h-[79px] ml-[70px] mt-5">
  <Image src="/Slice.png" alt="pic" width={376} height={79}/>
      </div>

      <div className=" w-[376px] h-[79px] ml-[70px] mt-5">
  <Image src="/Mushroom.png" alt="pic" width={376} height={79}/>
      </div>

      </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Menu