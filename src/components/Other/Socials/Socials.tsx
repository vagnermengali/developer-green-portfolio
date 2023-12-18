import Link from "next/link";
import {
  RiLinkedinLine,
  RiFacebookLine,
  RiInstagramLine,
  RiGithubLine,
  RiTwitterLine,
  RiMailLine
} from "react-icons/ri";

const Socials = () => {

  return (
    <div className="flex items-center xl:gap-x-5 gap-x-3 text-lg">
      <Link
        target="_blank"
        href={"https://github.com/vagnermengali"}
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
      >
        <RiGithubLine className="w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={"https://ms-my.facebook.com/vagner.mengali.9"}
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
      >
        <RiTwitterLine className="w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={"https://ms-my.facebook.com/vagner.mengali.9"}
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
      >
        <RiFacebookLine className="w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={"https://www.linkedin.com/in/vagnermengali/"}
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
      >
        <RiLinkedinLine className="w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href={"https://www.instagram.com/vagner.mengali/"}
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
      >
        <RiInstagramLine className="w-5 h-5" />
      </Link>
      <Link
        target="_blank"
        href="mailto:contatovagnermengali@gmail.com"
        className="hover:text-accent transition-all duration-300 xl:max-w-[26px] xl:max-h-[26px] max-w-[16px] max-h-[16px]"
      >
        <RiMailLine className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default Socials;
