import Link from "next/link";
import {
  RiInstagramLine,
  RiGithubFill,
  RiMailFill,
  RiLinkedinFill,
} from "react-icons/ri";
import { } from "react-icons/hi2";

const Socials = () => {
  
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        target="_blank"
        href={"https://github.com/vagnermengali"}
        className="hover:text-accent transition-all duration-300 max-w-[26px] max-h-[26px]"
      >
        <RiGithubFill className="w-7 h-7"/>
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/vagnermengali/"}
        className="hover:text-accent transition-all duration-300 max-w-[26px] max-h-[26px]"
      >
        <RiLinkedinFill className="w-7 h-7"/>
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/vagner.mengali/"}
        className="hover:text-accent transition-all duration-300 max-w-[26px] max-h-[26px]"
      >
        <RiInstagramLine className="w-7 h-7"/>
      </Link>
      <Link
        target="_blank"
        href="mailto:contatovagnermengali@gmail.com"
        className="hover:text-accent transition-all duration-300 max-w-[26px] max-h-[26px]"
      >
        <RiMailFill className="w-7 h-7"/>
      </Link>
    </div>
  );
};

export default Socials;
