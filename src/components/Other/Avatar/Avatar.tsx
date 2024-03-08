import Image from "next/image";

import { AvatarInterface } from "@/interfaces/AvatarInterface";

const Avatar = ({ opacity }: AvatarInterface) => {

  return (
    <div className="flex max-w-none">
      <Image
        src={"/avatar.webp"}
        width={804}
        height={1251}
        alt=""
        loading="eager"
        className={`translate-z-0 w-full h-full ${opacity ? 'xl:opacity-50 opacity-20' : 'xl:opacity-70 opacity-20'}`}
      />
    </div>
  );
};

export default Avatar;
