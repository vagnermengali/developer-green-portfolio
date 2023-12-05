import Image from "next/image";

const PaintOne = () => {
  return <div className="absolute -left-12 -bottom-12 rotate-[120deg] mix-blend-color-dodge animate-pulse duration-75 z-10 w-[200px] xl:w-[260px]">
    <Image src={'/image/green-background-3.png'} width={260} height={200} className="w-full h-full" alt=""/>
  </div>;
};

export default PaintOne;
