import Image from "next/image";

import { AvatarInterface } from "@/interfaces/AvatarInterface";

const Avatar = ({ opacity }: AvatarInterface) => {

  return (
    <div className="flex max-w-none">
      <Image
        src={"/avatar.webp"}
        width={737}
        height={678}
        alt=""
        className={`translate-z-0 w-full h-full contrast-[140%] brightness-[70%] saturate-0 ${opacity ? 'xl:opacity-50 opacity-20' : 'xl:opacity-80 opacity-20'}`}
      />
    </div>
  );
};

export default Avatar;
