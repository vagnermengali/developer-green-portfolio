import Image from "next/image";

import { AvatarInterface } from "@/interfaces/AvatarInterface";

const Avatar = ({opacity}: AvatarInterface) => {
  return (
    <div className="hidden xl:flex xl:max-w-none">
      <Image
        src={"/image/avatar.png"}
        width={737}
        height={678}
        alt=""
        className={`translate-z-0 w-full h-full saturate-0 contrast-[128%] brightness-[90%] ${opacity ? 'opacity-50' : ''}`}
      /> 
    </div>
  );
};

export default Avatar;
