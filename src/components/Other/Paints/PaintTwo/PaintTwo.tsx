import Image from "next/image";

const PaintTwo = () => {
  
  return <div className="absolute -left-20 -top-20 rotate-[240deg] mix-blend-color-dodge z-10 w-[250px] xl:w-[250px] h-[250px] opacity-50">
    <Image src='/green-background3.webp' width={250} height={250} alt="" loading="eager"/>
  </div>;
};

export default PaintTwo;
