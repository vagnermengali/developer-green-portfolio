import Link from "next/link";

import Socials from "@/components/Other/Socials/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          <Link href={"/"}>
            <h1 className="text-4xl flex items-center" /* priority={true} */><b className="px-2">Vagner</b><p className="text-accent">Mengali</p></h1>
          </Link>
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
