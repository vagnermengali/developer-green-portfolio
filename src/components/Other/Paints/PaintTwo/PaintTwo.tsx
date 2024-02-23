import Image from "next/image";

const PaintTwo = () => {
  
  return <div className="absolute -left-20 -top-20 rotate-[240deg] mix-blend-color-dodge z-10 w-[200px] xl:w=[400px] opacity-50">
    <Image src='/green-background3.webp' width={400} height={400} alt=""/>
  </div>;
};

export default PaintTwo;
