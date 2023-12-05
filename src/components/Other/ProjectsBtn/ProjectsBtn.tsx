import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  
  return (
    <div className="mx-auto xl:m-0">
      <Link
        href={"/work"}
        className="relative w-[135px] h-[135px] flex justify-center items-center bg-circle bg-cover bg-center bg-no-repeat group"
      >
        <Image
          src={"/image/rounded-text.png"}
          width={101}
          height={108}
          alt=""
          className="animate-spin-slow w-full h-full max-w-[101px] max-h-[108px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transation-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
