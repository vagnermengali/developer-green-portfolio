import Image from "next/image";
import Link from "next/link";
import { RiArrowRightLine } from "react-icons/ri";

const ProjectsBtn = () => {
  
  return (
    <div className="mx-auto xl:m-0 flex justify-center items-center cursor-pointer">
      <Link
        href={"/work"}
        className="relative w-[135px] h-[135px] flex justify-center items-center bg-circle bg-cover bg-center bg-no-repeat group cursor-pointer"
        aria-label={"work"}
      >
        <Image
          src={"/rounded-text.webp"}
          fill
          alt="rounded-text"
          className="animate-spin-slow w-full h-full max-w-[111px] max-h-[118px] m-auto cursor-pointer"
        />
        <RiArrowRightLine className="text-4xl" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
