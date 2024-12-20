import Image from "next/image";
const Clients = () => {
  return (
    <div className=" w-[1920px] bg-black ">
      <div className=" w-[1319px] h-[247px]  ml-[99px] flex ">
        {/* ===================01================= */}
        <div className=" w-[218px] h-[247px] ml-[300px] -mt-10">
          <div className="w-[120px] h-[120px] -mt-5">
            <Image src="/Group.png" alt="pic" width={120} height={120} />
          </div>
          <div className=" w-[218px] h-[32px] -ml-[40px]  ">
            <p className=" font-bold text-2xl leading-8 text-white ">
              Professional Chefs
            </p>
          </div>
          <div className=" w-[67px] h-[48px] ml-[30px] ">
            <p className=" font-bold text-3xl leading-10 text-white ">420</p>
          </div>
        </div>
        {/* ==================02================== */}
        <div className=" w-[218px] h-[247px] ml-[100px] -mt-10 ">
          <div className="w-[120px] h-[120px] -mt-5">
            <Image src="/Group (1).png" alt="pic" width={120} height={120} />
          </div>
          <div className=" w-[218px] h-[32px] -ml-[40px]  ">
            <p className=" font-bold text-2xl leading-8 text-white ">
            Items Of Food
            </p>
          </div>
          <div className=" w-[67px] h-[48px] ml-[30px] ">
            <p className=" font-bold text-3xl leading-10 text-white ">320</p>
          </div>
        </div>
        {/* ===================03=================== */}
        <div className=" w-[218px] h-[247px] ml-[100px] -mt-10 ">
          <div className="w-[120px] h-[120px] -mt-5">
            <Image src="/chamach.png" alt="pic" width={120} height={120} />
          </div>
          <div className=" w-[218px] h-[32px] -ml-[40px]  ">
            <p className=" font-bold text-2xl leading-8 text-white ">
            Items Of Food
            </p>
          </div>
          <div className=" w-[67px] h-[48px] ml-[30px] ">
            <p className=" font-bold text-3xl leading-10 text-white ">30+</p>
          </div>
        </div>
        {/* ========================04========================= */}
        <div className=" w-[218px] h-[247px] ml-[100px] -mt-10 ">
          <div className="w-[120px] h-[120px] -mt-5">
            <Image src="/Hamza.png" alt="pic" width={120} height={120} />
          </div>
          <div className=" w-[218px] h-[32px] -ml-[40px]  ">
            <p className=" font-bold text-2xl leading-8 text-white ">
            Happy Customers
            </p>
          </div>
          <div className=" w-[67px] h-[48px] ml-[30px] ">
            <p className=" font-bold text-3xl leading-10 text-white ">220</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
