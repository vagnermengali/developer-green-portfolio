import Link from "next/link";
import { useRouter } from "next/router";

import { navData } from "@/data/nav"

const Nav = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <nav className="flex flex-col items-center justify-center gap-y-4 fixed h-[10dvh] bottom-0 mt-auto xl:right-[2%] z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen">
      <div className="flex w-full xl:flex-col items-center justify-center gap-y-10 gap-x-6 px-4 md:px-40 h-[10dvh] xl:px-0 xl:h-max py-4 xl:py-8 bg-primary xl:bg-white/10 backdrop-blue-sm text-3xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              className={`${link.path === pathname && "text-accent"
                } relative flex items-center group hover:text-accent transition-all duration-300 xl:w-fit w-6`}
              href={link.path}
              key={index}
            >
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">{link.name}
                  </div>
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div className="xl:w-5 w-4">{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;
