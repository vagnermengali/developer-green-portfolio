import Image from "next/image";

const Circles = () => {
  
  return (
    <div className="hidden xl:flex w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/green-background-2.webp"}
        width={260}
        height={200}
        className="w-full h-full "
        alt=""
        loading="eager"
      />
    </div>
  );
};

export default Circles;
