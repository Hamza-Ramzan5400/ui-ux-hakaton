import Image from "next/image"
interface commonProps {
  title : string,
  subtitle : string;
}
const HeroCommon = (props : commonProps) => {
  console.log (props)
  return (
    <div className="relative bg-black text-white h-64 flex items-center justify-center">
      <Image
        src="/Menu image.png"
        alt="Fresh radishes"
        height={410} width={1920}
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="relative  text-center">
        <h1 className="text-4xl font-bold">{props.title}</h1>
        <nav className="mt-2">
          <a href="/" className="text-gray-300 hover:text-white">Home</a>
          <span className="mx-2 text-gray-300"> &gt; </span>
          <a href="/menu" className="text-[#ff9f0d] ">{props.subtitle}</a>
        </nav>
      </div>
    </div>
  );
};

export default  HeroCommon;